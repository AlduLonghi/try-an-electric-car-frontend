import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import fetchConfig from '../helpers/fetch';
import Navbar from '../components/Navbar';
import baseUrl from '../helpers/base-url';
import '../styles/car-details.scss';
import LoadingWheel from '../components/LoadingWheel';

const CarDetails = () => {
  const today = new Date();
  console.log(today.getUTCDate());
  const [savedAppointment, setSavedAppointment] = useState(false);
  const [appointInput, setAppointInput] = useState({ date: `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getUTCDate() + 1}`, time: '', city: 'New York' });
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
    setAppointInput({ ...appointInput, [e.target.name]: e.target.value });
    console.log(appointInput.date);
    console.log(appointInput.time);
  };

  const handleOnClick = () => {
    fetch(`${baseUrl}/appointments`, {
      ...fetchConfig(),
      method: 'POST',
      body: JSON.stringify({
        city: appointInput.city,
        date: `${appointInput.date}T${appointInput.time}`,
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
              {car.description}
            </p>
            <form>
              <p className="text-center font-weight-bold book-text">Book a test drive</p>
              {savedAppointment === false ? (
                <>
                  <div className="d-flex">
                    <input className="d-block w-50" type="date" name="date" onChange={handleOnChange} />
                    <input className="d-block w-50" type="time" name="time" onChange={handleOnChange} />
                  </div>
                  <select name="city" onChange={handleOnChange} className="form-select d-block w-100 py-1 mt-3" aria-label="Default select example">
                    <option>Choose a city</option>
                    <option value="New York">New York</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Melbourne">Melbourne</option>
                  </select>
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
    toRederComponent = (
      <LoadingWheel />
    );
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
