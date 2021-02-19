import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../styles/navbar.scss';

const Navbar = () => {
  const [navbarDisplay, setNavbarDisplay] = useState('display-none');

  const handleOnClick = () => {
    if (navbarDisplay === 'display-block') {
      setNavbarDisplay('display-none');
    } else {
      setNavbarDisplay('display-block');
    }
  };

  return (
    <div>
      <div className="collapse-btn">
        <button type="button" onClick={handleOnClick}>
          <span className="material-icons">
            drag_handle
          </span>
        </button>
      </div>
      <nav className={`${navbarDisplay}`}>
        <h1 className="text-center">Electric</h1>
        <ul className="text-uppercase font-weight-bold py-1 text-center d-flex flex-column justify-content-center">
          <li><Link to="/home">Lifestyle</Link></li>
          <li><Link to="/models">Models</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        <Footer component="navbar" />
      </nav>
    </div>
  );
};

export default Navbar;
