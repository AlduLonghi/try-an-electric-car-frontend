import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import fetchConfig from '../helpers/fetch';
import Navbar from '../components/Navbar';
import baseUrl from '../helpers/base-url';
import '../styles/car-details.scss';

const CarDetails = () => {
  const [savedAppointment, setSavedAppointment] = useState(false);
  const [datetime, setDatetime] = useState();
  const [car, setCar] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${baseUrl}/cars/${id}`, fetchConfig())
      .then(res => {
        if (res.ok) {
          res.json().then(jsonRes => {
            setCar(jsonRes.data);
          });
        }
      });
  }, []);

  const handleOnChange = e => {
    setDatetime(e.target.value);
    console.log(datetime);
  };

  const handleOnClick = () => {
    fetch(`${baseUrl}/appointments`, {
      ...fetchConfig(),
      method: 'POST',
      body: JSON.stringify({
        date: datetime,
        car_id: id,
      }),
    })
      .then(res => {
        if (res.ok) {
          setSavedAppointment(true);
        }
      });
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 764 },
      items: 1,
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

  let toRederComponent;
  if (car) {
    toRederComponent = (
      <div className="car-details-cont mx-auto">
        <div className="row">
          <div className="col-12 col-md-8">
            <Carousel className="mx-auto carousel-img" responsive={responsive} itemClass="carousel-item-padding-40-px">
              <img className="car-img d-block mx-auto" src={car.profPic[0].url} alt="main-img" />
              <img className="car-img d-block mx-auto" src={car.generalPics[0].url} alt="general-img-1" />
              <img className="car-img d-block mx-auto" src={car.generalPics[1].url} alt="general-img-2" />
            </Carousel>
          </div>
          <div className="col-12 col-md-4">
            <h1 className="mb-3">{car.model}</h1>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td className="font-weight-bold">Category</td>
                  <td>{car.category}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Horsepower</td>
                  <td>{car.horsepower}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Range</td>
                  <td>{`${car.range}km`}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Price</td>
                  <td>{`$${car.price}`}</td>
                </tr>
              </tbody>
            </table>
            <p className="car-description text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec eget sem ultrices magna ornare vestibulum. Donec elit justo,
              tincidunt vitae dictum eu, viverra a orci.
              Quisque et lectus at purus sollicitudin rhoncus.
            </p>
            <form>
              <p className="text-center font-weight-bold book-text">Book a test drive</p>
              {savedAppointment === false ? (
                <>
                  <input className="d-block mx-auto" type="datetime-local" onChange={handleOnChange} />
                  <button className="book-button text-uppercase py-2 px-3 d-block mx-auto" type="button" onClick={handleOnClick}>Book it</button>
                </>
              )
                : (<p className="text-center font-weight-bold p-saved">Your appointment has been saved</p>)}
            </form>
          </div>
        </div>
        <button type="button" className="go-back-btn font-weight-bold text-left" onClick={() => history.goBack()}>Back</button>
      </div>
    );
  } else {
    toRederComponent = 'hello';
  }

  return (
    <div className="h-100 car-details-main-cont">
      <Navbar />
      <main className="main-car-details">
        {toRederComponent}
      </main>
    </div>
  );
};

export default CarDetails;
