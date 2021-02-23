import Navbar from '../components/Navbar';
import '../styles/lifestyle.scss';

const Lifestyle = () => (
  <div className="h-100 lifestyle-cont">
    <Navbar />
    <main>
      <div className="w-75 mx-auto lifestyle-cont d-flex flex-column justify-content-center">
        <div className="lifestyle-grid">
          <div className="row">
            <div className="col-lg-4 col-12 column">
              <img className="grid-img" src="https://image.freepik.com/free-photo/human-hand-is-holding-electric-car-charging-connect-electric-car_1153-5059.jpg" alt="jaja" />
            </div>
            <div className="col-lg-4 col-12 column backg-yellow d-flex flex-column justify-content-center">
              <p className="text-center font-weight-bold p-lifestyle">Safety</p>
            </div>
            <div className="col-lg-4  col-12 column">
              <img className="grid-img" src="https://image.freepik.com/free-photo/mother-with-daughter-sitting-car-winter_1303-13057.jpg" alt="jaja" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12 column backg-red d-flex flex-column justify-content-center">
              <p className="text-center font-weight-bold p-lifestyle">Speed</p>
            </div>
            <div className="col-lg-4 col-12 column">
              <img className="grid-img" src="https://image.freepik.com/free-photo/woman-charging-electro-car-by-her-house_1303-18459.jpg" alt="jaja" />
            </div>
            <div className="col-lg-4  col-12 column backg-grey d-flex flex-column justify-content-center">
              <p className="text-center font-weight-bold p-lifestyle">Relax</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12 column">
              <img className="grid-img" src="https://image.freepik.com/free-photo/expressway-modern-city-skyline_1112-3764.jpg" alt="jaja" />
            </div>
            <div className="col-lg-4 col-12 column backg-green d-flex flex-column justify-content-center">
              <p className="text-center font-weight-bold p-lifestyle">Eco-friendly</p>
            </div>
            <div className="col-lg-4  col-12 column">
              <img className="grid-img" src="https://robbreport.com/wp-content/uploads/2015/10/tesla-s-p90d-011.jpg?w=1000" alt="jaja" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Lifestyle;
