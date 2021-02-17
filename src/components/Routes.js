import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes = ({ loggedIn }) => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/home" component={Home} />
    <Route
      exact
      path="/"
      render={() => (
        !loggedIn
          ? (<Redirect to="/login" />)
          : (<Redirect to="/home" />)
      )}
    />
  </Switch>
);

Routes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Routes;
