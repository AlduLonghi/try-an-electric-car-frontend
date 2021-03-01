import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUser } from '../redux/actions/user';
import Routes from './Routes';

const App = ({ fetchUser, loggedIn }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes loggedIn={loggedIn} />
    </BrowserRouter>
  );
};

App.propTypes = {
  loggedIn: PropTypes.string.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
