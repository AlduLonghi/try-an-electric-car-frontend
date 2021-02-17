import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser, loggedIn } from '../redux/actions/user';

const Login = ({ setUser, loggedIn }) => {
  const history = useHistory();
  const [loginInputs, setLoginInputs] = useState({ email: '', password: '' });

  const handleChange = e => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleOnClick = () => {
    console.log(loginInputs);
    fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInputs),
    })
      .then(res => {
        setUser(res.data);
        loggedIn('true');
        history.push('/home');
      }).catch(() => loggedIn('false'));
  };

  return (
    <div className="login-cont d-flex align-items-center">
      <form className="login-form">
        <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange} />
          <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleOnClick}>Login</button>
      </form>
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
