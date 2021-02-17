import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import setUser from '../redux/actions/user';
import Routes from './Routes';

const App = ({ setUser, loggedIn }) => {
  useEffect(() => {
    setUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes loggedIn={loggedIn} />
    </BrowserRouter>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
