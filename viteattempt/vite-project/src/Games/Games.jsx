import { Link } from 'react-router-dom';
import './Games.css';

function Games() {
   return (
        <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-12 col-xl-12 Box mt-5 mb-5">
            <h1 className='text-center'>Esports Engagement Center Avaliable Games</h1>
            <div className="text-center">
                <hr className="mx-auto col-8 col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 HR" />
            </div>
            <p className='p m-4 ms-5'>
                Here at the Esports Engagement Center, we offer a wide variety of games for various
                devices, including PlayStation 5, PlayStation 4, PC, Nintendo Switch, and the Motion 
                Racing Simulator. The games for each device are listed below
            </p>
            <div className="mt-4 ms-5">
                <h2>PlayStation 5</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Tekken 7</li>
                    <li className="ms-5 mb-2">Naruto: Ultimate Ninja Storm 4</li>
                </ul>
            </div>
            <div className="mt-4 ms-5">
                <h2>PlayStation 4</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Tekken 7</li>
                    <li className="ms-5 mb-2">Naruto: Ultimate Ninja Storm 4</li>
                    <li className="ms-5 mb-2">Azur Lane: Crosswave</li>
                    <li className="ms-5 mb-2">Guilty Gear -Strive-</li>
                </ul>
            </div>
            <div className="mt-4 ms-5">
                <h2>PC</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Red Dead Redemption</li>
                    <li className="ms-5 mb-2">Spider-Man 2</li>
                    <li className="ms-5 mb-2">Fortnite</li>
                    <li className="ms-5 mb-2">Call of Duty</li>
                </ul>
            </div>
            <div className="mt-4 ms-5">
                <h2>Nintendo Switch</h2>
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
            <div className="mt-4 ms-5">
                <h2>Motion Racing Simulator</h2>
                <ul className='dots'>
                    <li className="ms-5 mb-2">Assetto Corsa</li>
                    <li className="ms-5 mb-2">Assetto Corsa Competizione</li>
                    <li className="ms-5 mb-2">Project CARS 3</li>
                    <li className="ms-5 mb-2">Project CARS 2</li>
                </ul>
            </div>
            <div className="mt-4 ms-5">
                <h2>Ready to Play? Login and Rent a Device</h2>
                <Link to="/login" target="_blank">
                    <button className="button-11 mt-5 mb-5" role="button">Login</button>
                </Link>
            </div>
        </section>
   );
  
}

export default Games;