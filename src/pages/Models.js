import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from 'react-multi-carousel';
import fetchCars from '../redux/actions/cars';
import Navbar from '../components/Navbar';
import 'react-multi-carousel/lib/styles.css';

const Models = ({ fetchCars, cars }) => {
  useEffect(() => {
    fetchCars();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let toRenderComponent;
  if (cars) {
    toRenderComponent = (
      <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px" removeArrowOnDeviceType={['mobile']}>
        <div>{cars[0].model}</div>
        <div>{cars[1].model}</div>
        <div>{cars[2].model}</div>
        <div>{cars[3].model}</div>
      </Carousel>
    );
  } else {
    toRenderComponent = 'hello';
  }

  return (
    <div className="h-100">
      <Navbar />
      <main>
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
