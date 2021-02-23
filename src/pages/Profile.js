import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchConfig from '../helpers/fetch';
import Navbar from '../components/Navbar';
import '../styles/profile.scss';
import baseUrl from '../helpers/base-url';
import LoadingWheel from '../components/LoadingWheel';

const Profile = ({ user }) => {
  const [appointments, setAppointments] = useState();

  useEffect(() => {
    fetch(`${baseUrl}/appointments`, fetchConfig())
      .then(res => {
        if (res.ok) {
          res.json().then(jsonRes => {
            setAppointments(jsonRes.data);
          });
        }
      });
  }, []);

  const handleOnClick = id => {
    fetch(`${baseUrl}/appointments/${id}`, {
      ...fetchConfig(),
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        setAppointments(appointments.filter(app => app.id !== id));
      }
    });
  };

  let toRenderComponent;
  if (appointments) {
    toRenderComponent = (
      <div>
        {appointments.map(app => {
          const date = new Date(app.datetime);
          return (
            <div key={app.id} className="card mx-auto mt-2">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">{app.model}</h5>
                <p className="card-text">{date.toString()}</p>
                <button type="button" onClick={() => handleOnClick(app.id)} className="btn btn-danger ml-auto">Cancel</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    toRenderComponent = (
      <div className="w-100 h-100">
        <LoadingWheel />
      </div>
    );
  }

  return (
    <div className="h-100 profile-cont">
      <Navbar />
      <main className="h-100">
        <div className="text-center models-text-cont">
          <h1 className="font-weight-bold">{`Hello, ${user.name}`}</h1>
          <p className="select-a-car-text font-weight-bold mt-2">These are your test drive appointments</p>
          <span className="line-span d-block mx-auto mt-5" />
        </div>
        {toRenderComponent}
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
});

Profile.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Profile);
