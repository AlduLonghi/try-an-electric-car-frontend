import '../styles/car-link.scss';
import PropTypes from 'prop-types';
import dottedLine from '../assets/dotted-line.svg';

const CarLink = ({ model, pic }) => (
  <div className="link-cont">
    <div className="pic-container d-flex flex-column justify-content-center align-items-center">
      <img className="main-img" src={pic} alt="car-profile" />
      <div className="pic-background backg-light-green" />
    </div>
    <div className=" w-75 mx-auto d-flex justify-content-center mt-3">
      <img className="dotted-line" src={dottedLine} alt="dotted-line" />
      <img className="dotted-line ml-1" src={dottedLine} alt="dotted-line" />
      <img className="dotted-line ml-1" src={dottedLine} alt="dotted-line" />
    </div>
    <p className="d-block text-center">{model}</p>
  </div>
);

CarLink.propTypes = {
  model: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default CarLink;
