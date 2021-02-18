import PropTypes from 'prop-types';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import behanceLogo from '../assets/behance.svg';
import '../styles/footer.scss';

const Footer = ({ component }) => {
  const classForFooter = component === 'navbar'
    ? 'as-navbar-component'
    : 'as-home-component';

  return (
    <footer className={classForFooter}>
      <div className="d-flex justify-content-around w-50 mx-auto">
        <img src={githubLogo} alt="github" />
        <img src={linkedinLogo} alt="linkedin" />
        <img src={behanceLogo} alt="behance" />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  component: PropTypes.string.isRequired,
};

export default Footer;
