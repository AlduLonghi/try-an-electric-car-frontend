import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from 'react-multi-carousel';
import fetchCars from '../redux/actions/cars';
import Navbar from '../components/Navbar';
import CarLink from '../components/CarLink';
import 'react-multi-carousel/lib/styles.css';
import '../styles/car-link.scss';

const Models = ({ fetchCars, cars }) => {
  useEffect(() => {
    fetchCars();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 764, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let toRenderComponent;
  if (cars.length !== 0) {
    toRenderComponent = (
      <>
        <div className="text-center models-text-cont">
          <h1 className="font-weight-bold">Latest models</h1>
          <p className="select-a-car-text font-weight-bold mt-2">Please select a car model</p>
          <span className="line-span d-block mx-auto mt-5" />
        </div>
        <Carousel className="mx-auto carousel-cont" responsive={responsive} itemClass="carousel-item-padding-20-px">
          {cars.map(car => (
            <CarLink key={car.id} model={car} pic={car.profPic[0].url} />
          ))}
        </Carousel>
      </>
    );
  } else {
    toRenderComponent = 'hello';
  }

  return (
    <div className="models-cont">
      <Navbar />
      <main className="main-models">
        {toRenderComponent}
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  cars: state.cars.cars,
});

const mapDispatchToProps = {
  fetchCars,
};

Models.propTypes = {
  cars: PropTypes.instanceOf(Array).isRequired,
  fetchCars: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Models);
