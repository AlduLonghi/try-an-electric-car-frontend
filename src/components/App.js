import { useEffect } from 'react';
import LoadingWheel from 'components/LoadingWheel';
import LogIn from 'pages/Login';
import Home from  'pages/Home';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

const App = ({ loggedIn, user }) => {
  useEffect(() => {

  });

  let toRenderComponent;

  switch (loggedIn) {
    case '':
      toRenderComponent = <LoadingWheel />;
    case false:
      toRenderComponent = <LogIn />;
    case true:
      toRenderComponent = <Home user={user}/>;
  }
  return (
    { toRenderComponent }
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
}

mapStateToProps = state = ({
  loggedIn: state.user.loggedIn,
  user: state.user.user
})

export default App;
