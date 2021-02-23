import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';
import '../styles/navbar.scss';
import LogoutBtn from './LogoutBtn';

const Navbar = () => {
  const [navbarDisplay, setNavbarDisplay] = useState('display-none');
  const { pathname } = useLocation();

  const handleOnClick = () => {
    if (navbarDisplay === 'display-block') {
      setNavbarDisplay('display-none');
    } else {
      setNavbarDisplay('display-block');
    }
  };

  const linkText = ['lifestyle', 'models', 'profile'];

  return (
    <div>
      <div>
        <div className="collapse-btn">
          <button type="button" onClick={handleOnClick}>
            <span className="material-icons">
              drag_handle
            </span>
          </button>
          <LogoutBtn />
        </div>
      </div>
      <nav className={`${navbarDisplay}`}>
        <h1 className="text-center">Electricar</h1>
        <ul className="text-uppercase font-weight-bold py-1 text-center d-flex flex-column justify-content-center">
          {linkText.map(link => (
            <li key={link}>
              <NavLink
                activeClassName="active-navlink"
                isActive={() => pathname === `/${link}`}
                className="a-navbar"
                to={`/${link}`}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        <Footer component="navbar" />
      </nav>
    </div>
  );
};

export default Navbar;
