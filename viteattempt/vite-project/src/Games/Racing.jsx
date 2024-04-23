import { Link } from 'react-router-dom';
import assetto from '../Photos/assetto.jpg';
import competizione from '../Photos/competizione.jpg';
import cars3 from '../Photos/cars3.jpg';
import cars2 from '../Photos/cars2.jpg';
import './Games.css';

function Racing_() {
   return (
        <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-12 col-xl-12">
            <h1 className='text-center'>Motion Racing Simulator Avaliable Games</h1>
            <div className="text-center">
                <hr className="mx-auto col-8 col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3" />
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={assetto} alt="assetto" className="img-fluid"/>
                    <h3 className='game'>Assetto Corsa</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={competizione} alt="competizione" className="img-fluid" />
                    <h3 className='game'>Assetto Corsa Competizione</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={cars3} alt="cars3" className="img-fluid"/>
                    <h3 className='game'>Project CARS 3</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={cars2} alt="cars2" className="img-fluid" />
                    <h3 className='game'>Project CARS 2</h3>
                </div>
            </div>
            <div className="mt-4">
                <h2>Games We Offer For Motion Racing Simulator</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Assetto Corsa</li>
                    <li className="ms-5 mb-2">Assetto Corsa Competizione</li>
                    <li className="ms-5 mb-2">Project CARS 3</li>
                    <li className="ms-5 mb-2">Project CARS 2</li>
                </ul>
            </div>
            <div className="mt-4">
                <h2>Ready to Play? Login and Rent a Motion Racing Simulator</h2>
                <Link to="/login" target="_blank">
                    <button className="button-10 mt-5 mb-5" role="button">Login</button>
                </Link>
            </div>
        </section>
   );
  
}

export default Racing_;