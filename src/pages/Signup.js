import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser, loggedIn } from '../redux/actions/user';
import fetchConfig from '../helpers/fetch';
import baseUrl from '../helpers/base-url';
import '../styles/auth.scss';

const Signup = ({ setUser, loggedIn }) => {
  const history = useHistory();
  const [signupInputs, setSignupInputs] = useState({
    name: '', email: '', password: '', password_confirmation: '',
  });

  const handleChange = e => {
    setSignupInputs({ ...signupInputs, [e.target.name]: e.target.value });
  };

  const handleOnClickForm = () => {
    fetch(`${baseUrl}/users`, {
      ...fetchConfig,
      method: 'POST',
      body: JSON.stringify(signupInputs),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(jsonRes => {
            setUser(jsonRes);
          });
          loggedIn('true');
          history.push('/home');
        } else {
          loggedIn('false');
        }
      });
  };

  const handleOnClickSide = () => {
    history.push('/login');
  };

  return (
    <div className="auth-cont d-flex align-items-center justify-content-center py-3">
      <div className="row auth-row mx-0">
        <div className="col-md-9 d-flex align-items-center">
          <form className="auth-form">
            <p className="form-title">Welcome back!</p>
            <div className="mt-2">
              <span className="text-muted text-uppercase mb-3">Name</span>
              <input type="text" className="input" name="name" onChange={handleChange} />
            </div>
            <div className="mt-2">
              <span className="text-muted text-uppercase mb-3">Email</span>
              <input type="email" className="input" name="email" onChange={handleChange} />
            </div>
            <div className="mt-2">
              <span className="text-muted text-uppercase mb-3">Password</span>
              <input type="password" className="input" name="password" onChange={handleChange} />
            </div>
            <div className="mt-2">
              <span className="text-muted text-uppercase mb-3">Confirm password</span>
              <input type="password" className="input" name="password_confirmation" onChange={handleChange} />
            </div>
            <button type="button" className="d-block mx-auto py-2 text-uppercase my-3 text-center" onClick={handleOnClickForm}>Sign up</button>
          </form>
        </div>
        <div className="col-md-3 auth-side">
          <div>
            <p className="mb-3">Coming back?</p>
            <p>Log in and keep enjoying!</p>
          </div>
          <button type="button" onClick={handleOnClickSide} className="side-button d-block text-uppercase py-2 px-4 mx-auto">Log in</button>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  setUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setUser,
  loggedIn,
};

export default connect(null, mapDispatchToProps)(Signup);
