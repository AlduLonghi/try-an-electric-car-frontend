import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchConfig from '../helpers/fetch';
import Navbar from '../components/Navbar';
import '../styles/profile.scss';

const Profile = ({ user }) => {
  const [appointments, setAppointments] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/appointments', fetchConfig)
      .then(res => {
        if (res.ok) {
          res.json().then(jsonRes => {
            console.log(jsonRes.data);
            setAppointments(jsonRes.data);
          });
        }
      });
  }, []);

  let toRenderComponent;
  if (appointments) {
    toRenderComponent = (
      <>
        <div className="text-center models-text-cont">
          <h1 className="font-weight-bold">{`Hello, ${user.name}`}</h1>
          <p className="select-a-car-text font-weight-bold mt-2">These are your test drive appointments</p>
          <span className="line-span d-block mx-auto mt-5" />
        </div>
        <div>
          {appointments.map(app => {
            const date = new Date(app.datetime);
            return (
              <div key={app.id} className="card w-50 mx-auto mt-2">
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">{app.model}</h5>
                  <p className="card-text">{date.toString()}</p>
                  <button type="button" className="btn btn-danger ml-auto">Cancel</button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <div className="h-100 profile-cont">
      <Navbar />
      <main className="h-100">
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
