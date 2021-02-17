import PropTypes from 'prop-types';

const Home = ({ user }) => (
  <div>
    {user}
  </div>
);

Home.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
