import { useHistory } from 'react-router-dom';
import '../styles/navbar.scss';

const LogoutBtn = () => {
  const history = useHistory();
  const handleOnclick = () => {
    localStorage.setItem('token', '');
    history.push('/login');
  };
  return (
    <button className="logout-btn text-center" type="button" onClick={handleOnclick}>Logout</button>
  );
};

export default LogoutBtn;
