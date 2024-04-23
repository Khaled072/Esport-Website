import { Link } from 'react-router-dom';
import kakarot from '../Photos/kakarot.jpg';
import Sonic from '../Photos/Sonic.jpg';
import myhero from '../Photos/myhero.jpg';
import sega from '../Photos/sega.jpg';
import arcade from '../Photos/arcade.jpg';
import sports from '../Photos/sports.jpg';
import dance2020 from '../Photos/dance2020.jpg';
import dance2021 from '../Photos/dance2021.jpg';
import './Games.css';

function Swtich_() {
   return (
        <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-12 col-xl-12">
            <h1 className='text-center'>Nintendo Switch Avaliable Games</h1>
            <div className="text-center">
                <hr className="mx-auto col-8 col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3" />
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={kakarot} alt="kakarot" className="img-fluid" />
                    <h3 className='game'>Dragon Ball Z</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={Sonic} alt="Sonic" className="img-fluid" />
                    <h3 className='game'>Sonic Mania<sup>™</sup></h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={myhero} alt="myhero" className="img-fluid"/>
                    <h3 className='game'>My Hero One&apos;s Justice</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={sega} alt="sega" className="img-fluid" />
                    <h3 className='game'>Sega Genesis<sup>™</sup> Classics</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={arcade} alt="arcade" className="img-fluid"/>
                    <h3 className='game'>Namco Museum Arcade Pac</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={sports} alt="sports" className="img-fluid" />
                    <h3 className='game'>Nintendo Switch<sup>™</sup> Sports</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={dance2020} alt="dance2020" className="img-fluid"/>
                    <h3 className='game'>Just Dance<sup>®</sup> 2020</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
                    <img src={dance2021} alt="dance2021" className="img-fluid" />
                    <h3 className='game'>Just Dance<sup>®</sup> 2021</h3>
                </div>
            </div>
            <div className="mt-4">
                <h2>Games We Offer For Nintendo Switch</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Dragon Ball Z: Kakarot + A New Power Awakes Set</li>
                    <li className="ms-5 mb-2">Sonic Mania<sup>™</sup></li>
                    <li className="ms-5 mb-2">My Hero One&apos;s Justice</li>
                    <li className="ms-5 mb-2">Sega Genesis<sup>™</sup> Classics</li>
                    <li className="ms-5 mb-2">Namco Museum<sup>™</sup> Arcade Pac<sup>™</sup></li>
                    <li className="ms-5 mb-2">Nintendo Switch<sup>™</sup> Sports</li>
                    <li className="ms-5 mb-2">Just Dance<sup>®</sup> 2020</li>
                    <li className="ms-5 mb-2">Just Dance<sup>®</sup> 2021</li>
                </ul>
            </div>
            <div className="mt-4">
                <h2>Ready to Play? Login and Rent a Nintendo Switch</h2>
                <Link to="/login" target="_blank">
                    <button className="button-10 mt-5 mb-5" role="button">Login</button>
                </Link>
            </div>
        </section>
   );
  
}

export default Swtich_;