import { useHistory } from 'react-router-dom';
import fetchConfig from '../helpers/fetch';
import '../styles/navbar.scss';

const LogoutBtn = () => {
  const history = useHistory();
  const handleOnclick = () => {
    fetch('http://localhost:3000/logout', {
      ...fetchConfig,
      method: 'DELETE',
    })
      .then(() => {
        history.push('/login');
      });
  };
  return (
    <button className="logout-btn text-center" type="button" onClick={handleOnclick}>Logout</button>
  );
};

export default LogoutBtn;
