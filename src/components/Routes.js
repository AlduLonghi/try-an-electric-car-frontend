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
      render={() => {
        let toRender;
        if (loggedIn === 'false') {
          toRender = (<Redirect to="/login" />);
        } else if (loggedIn === 'true') {
          toRender = (<Redirect to="/home" />);
        }
        return toRender;
      }}
    />
  </Switch>
);

Routes.propTypes = {
  loggedIn: PropTypes.string.isRequired,
};

export default Routes;
