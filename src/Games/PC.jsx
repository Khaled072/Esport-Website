import { Link } from 'react-router-dom';
import Redemption from '../Photos/Redemption.jpeg';
import Spiderman from '../Photos/Spiderman.jpg';
import fortnite from '../Photos/fortnite.jpg';
import callofduty from '../Photos/callofduty.jpeg';
import './Games.css';

function PC_() {
   return (
        <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-12 col-xl-12">
            <h1 className='text-center'>PC Avaliable Games</h1>
            <div className="text-center">
                <hr className="mx-auto col-8 col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3" />
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={Redemption} alt="Redemption" className="img-fluid"/>
                    <h3 className='game'>Red Dead Redemption</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={Spiderman} alt="Spiderman" className="img-fluid" />
                    <h3 className='game'>Spider-Man 2</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={fortnite} alt="fortnite" className="img-fluid"/>
                    <h3 className='game'>Fortnite</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <img src={callofduty} alt="callofduty" className="img-fluid" />
                    <h3 className='game'>Call of Duty</h3>
                </div>
            </div>
            <div className="mt-4">
                <h2>Games We Offer For PC</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Red Dead Redemption</li>
                    <li className="ms-5 mb-2">Spider-Man 2</li>
                    <li className="ms-5 mb-2">Fortnite</li>
                    <li className="ms-5 mb-2">Call of Duty</li>
                </ul>
            </div>
            <div className="mt-4">
                <h2>Ready to Play? Login and Rent a PC</h2>
                <Link to="/login" target="_blank">
                    <button className="button-10 mt-5 mb-5" role="button">Login</button>
                </Link>
            </div>
        </section>
   );
  
}

export default PC_;