import { useHistory } from 'react-router-dom';
import '../styles/navbar.scss';
import PropTypes from 'prop-types';

const LogoutBtn = ({ display }) => {
  const history = useHistory();
  const handleOnclick = () => {
    localStorage.setItem('token', '');
    history.push('/login');
  };
  return (
    <button className={`logout-btn text-center ${display}`} type="button" onClick={handleOnclick}>Logout</button>
  );
};

LogoutBtn.propTypes = {
  display: PropTypes.string,
};

LogoutBtn.defaultProps = {
  display: 'display-block',
};

export default LogoutBtn;
