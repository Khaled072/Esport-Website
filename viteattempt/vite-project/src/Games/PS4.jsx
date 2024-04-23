import { Link } from 'react-router-dom';
import Tekken from '../Photos/Tekken7.jpg';
import Naruto from '../Photos/narutu.webp';
import Crosswave from '../Photos/crosswave.webp';
import Strive from '../Photos/strive.jpg';
import './Games.css';

function PS4_() {
   return (
        <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-12 col-xl-12">
            <h1 className='text-center'>PlayStation 4 Avaliable Games</h1>
            <div className="text-center">
                <hr className="mx-auto col-8 col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3" />
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={Tekken} alt="Tekken" className="img-fluid"/>
                    <h3 className='game'>Tekken 7</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={Naruto} alt="Naruto" className="img-fluid" />
                    <h3 className='game'>Naruto: Ultimate Ninja Storm 4</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={Crosswave} alt="Crosswave" className="img-fluid"/>
                    <h3 className='game'>Azur Lane: Crosswave</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={Strive} alt="strive" className="img-fluid" />
                    <h3 className='game'>Guilty Gear -Strive-</h3>
                </div>
            </div>
            <div className="mt-4">
                <h2>Games We Offer For PlayStation 4</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Tekken 7</li>
                    <li className="ms-5 mb-2">Naruto: Ultimate Ninja Storm 4</li>
                    <li className="ms-5 mb-2">Azur Lane: Crosswave</li>
                    <li className="ms-5 mb-2">Guilty Gear -Strive-</li>
                </ul>
            </div>
            <div className="mt-4">
                <h2>Ready to Play? Login and Rent a PlayStation 4</h2>
                <Link to="/login" target="_blank">
                    <button className="button-10 mt-5 mb-5" role="button">Login</button>
                </Link>
            </div>
        </section>
   );
  
}

export default PS4_;