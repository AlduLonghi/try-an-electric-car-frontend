import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../pages/Login';
import Lifestyle from '../pages/Lifestyle';
import Signup from '../pages/Signup';
import Models from '../pages/Models';

const Routes = ({ loggedIn }) => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/models" component={Models} />
    <Route path="/lifestyle" component={Lifestyle} />
    <Route
      exact
      path="/"
      render={() => {
        let toRender;
        if (loggedIn === 'false') {
          toRender = (<Redirect to="/login" />);
        } else if (loggedIn === 'true') {
          toRender = (<Redirect to="/lifestyle" />);
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
