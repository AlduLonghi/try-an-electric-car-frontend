import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser, loggedIn } from '../redux/actions/user';
import fetchConfig from '../helpers/fetch';
import '../styles/auth.scss';

const Login = ({ setUser, loggedIn }) => {
  const history = useHistory();
  const [loginInputs, setLoginInputs] = useState({ email: '', password: '' });

  const handleChange = e => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleOnClickForm = () => {
    fetch('http://localhost:3000/login', {
      ...fetchConfig,
      method: 'POST',
      body: JSON.stringify(loginInputs),
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
    history.push('/signup');
  };

  return (
    <div className="auth-cont d-flex align-items-center justify-content-center py2">
      <div className="row auth-row mx-0">
        <div className="col-md-9 d-flex align-items-center">
          <form className="auth-form">
            <p className="form-title">Welcome back!</p>
            <div>
              <span className="text-muted text-uppercase mb-3">Email</span>
              <input type="email" className="input" name="email" onChange={handleChange} />
            </div>
            <div className="">
              <span className="text-muted text-uppercase mb-3">Password</span>
              <input type="password" className="input" name="password" onChange={handleChange} />
            </div>
            <button type="button" className="d-block mx-auto py-2 text-uppercase text-center" onClick={handleOnClickForm}>Log in</button>
          </form>
        </div>
        <div className="col-md-3 auth-side">
          <div>
            <p className="mb-3">New here?</p>
            <p>Sign up and discover the wonderful universe of electric cars</p>
          </div>
          <button type="button" onClick={handleOnClickSide} className="side-button d-block text-uppercase py-2 px-4 mx-auto">Sign up</button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setUser,
  loggedIn,
};

export default connect(null, mapDispatchToProps)(Login);
