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
      <div className="d-flex justify-content-around w-50 mx-auto mb-2">
        <a href="https://github.com/AlduLonghi"><img src={githubLogo} alt="github" /></a>
        <a href="https://www.linkedin.com/in/aldanalonghi/"><img src={linkedinLogo} alt="linkedin" /></a>
        <a href="https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign"><img src={behanceLogo} alt="behance" /></a>
      </div>
      <p className="text-center p-footer">©2021 Aldana Longhi</p>
    </footer>
  );
};

Footer.propTypes = {
  component: PropTypes.string.isRequired,
};

export default Footer;
