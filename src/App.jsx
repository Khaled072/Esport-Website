import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
//import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Home from './Home/Home.jsx';
import Hours_Location from './Home/Hours_Location.jsx';
import Info_Checkin from './Home/Info_Checkin.jsx';
import Aboutus from './About/Aboutus.jsx';
import Staff from './About/Staff.jsx';
import Checkin from './Checkin/Checkin.jsx';
import Devices from './Devices/Devices.jsx';
import Employment from './Employment/Employment.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import Games from './Games/Games.jsx';
import PS5_ from './Games/PS5.jsx';
import PS4_ from './Games/PS4.jsx';
import Swtich_ from './Games/Switch.jsx';
import Racing_ from './Games/Racing.jsx';
import PC_ from './Games/PC.jsx';
import Support from './Support/Support.jsx';
import Dashboard from './Dashboard/Dashboard.jsx'

function App() {
 return (
     <>
         <Header />
         <div className='container'>
           <Routes>
             <Route path="/" element={ <> <Home /> <Hours_Location /> <Info_Checkin /> </> }/>
             <Route path="/home" element={ <> <Home /> <Hours_Location /> <Info_Checkin /> </> }/>
             <Route path="/games" element={ <Games /> }/>
             <Route path="/ps5" element={ <PS5_ /> }/>
             <Route path="/ps4" element={ <PS4_ /> }/>
             <Route path="/pc" element={ <PC_ /> }/>
             <Route path="/nintendo_switch" element={ <Swtich_ /> }/>
             <Route path="/motion_racing_simulator" element={ <Racing_ /> }/>
             <Route path="/Checkin" element={ <Checkin /> }/>
             <Route path="/Register" element={ <Register /> }/>
             <Route path="/about" element={ <> <Aboutus /> <Staff /> </>}/>
             <Route path="/devices" element={ <Devices /> }/>
             <Route path="/support" element={ <Support /> }/>
             <Route path="/Login" element={ <Login /> }/>
             <Route path="/employment" element={ <Employment /> }/>
             <Route path="/dashboard" element={ <Dashboard /> }/>
           </Routes>
         </div>
         <Footer />
     </>
 );
}


export default App;





