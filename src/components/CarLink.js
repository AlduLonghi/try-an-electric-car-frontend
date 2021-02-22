import { Link } from 'react-router-dom';
import '../styles/car-link.scss';
import PropTypes from 'prop-types';
import dottedLine from '../assets/dotted-line.svg';

const CarLink = ({ model, pic }) => {
  const random = Math.floor(Math.random() * 4) + 1;

  const getClass = () => {
    switch (random) {
      case 1:
        return 'backg-light-green';
      case 2:
        return 'backg-light-red';
      case 3:
        return 'backg-light-yellow';
      case 4:
        return 'backg-light-grey';
      default:
        return 'backg-light-green';
    }
  };

  const backgClass = getClass();

  return (
    <Link to={`car/${model.id}`}>
      <div className="link-cont">
        <div className="pic-container d-flex flex-column justify-content-center align-items-center">
          <img className="main-img" src={pic} alt="car-profile" />
          <div className={`pic-background ${backgClass}`} />
        </div>
        <div className=" w-75 mx-auto d-flex justify-content-center mt-3">
          <img className="dotted-line" src={dottedLine} alt="dotted-line" />
          <img className="dotted-line ml-1" src={dottedLine} alt="dotted-line" />
          <img className="dotted-line ml-1" src={dottedLine} alt="dotted-line" />
        </div>
        <p className="d-block text-center p-model">{model.model}</p>
        <p className="link-description px-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec eget sem ultrices magna ornare vestibulum. Donec elit justo,
          tincidunt vitae dictum eu, viverra a orci.
          Quisque et lectus at purus sollicitudin rhoncus.
        </p>
      </div>
    </Link>
  );
};

CarLink.propTypes = {
  model: PropTypes.instanceOf(Object).isRequired,
  pic: PropTypes.string.isRequired,
};

export default CarLink;
