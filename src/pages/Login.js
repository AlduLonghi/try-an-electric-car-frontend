import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser, loggedIn } from '../redux/actions/user';
import fetchConfig from '../helpers/fetch';

const Login = ({ setUser, loggedIn }) => {
  const history = useHistory();
  const [loginInputs, setLoginInputs] = useState({ email: '', password: '' });

  const handleChange = e => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleOnClick = () => {
    fetch('http://localhost:3000/login', {
      ...fetchConfig,
      method: 'POST',
      body: JSON.stringify(loginInputs),
    })
      .then(res => {
        setUser(res.data);
        loggedIn('true');
        history.push('/home');
      }).catch(() => loggedIn('false'));
  };

  return (
    <div className="login-cont d-flex align-items-center justify-content-center">
      <div className="row login-row mx-0">
        <div className="col-lg-9 d-flex align-items-center py-5">
          <form className="login-form">
            <p className="welcome">Welcome back</p>
            <div>
              <span className="text-muted text-uppercase mb-3">Email</span>
              <input type="email" className="input" name="email" onChange={handleChange} />
            </div>
            <div className="">
              <span className="text-muted text-uppercase mb-3">Password</span>
              <input type="password" className="input" name="password" onChange={handleChange} />
            </div>
            <button type="button" className="d-block mx-auto py-2 text-uppercase w-50" onClick={handleOnClick}>Log in</button>
          </form>
        </div>
        <div className="col-lg-3 login-side py-5">
          <p className="mb-3">New here?</p>
          <p>Sign up and discover the wonderful universe of electric cars</p>
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
