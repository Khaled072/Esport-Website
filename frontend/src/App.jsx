

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import React from 'react';
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
import Dashboard from './Dashboard/Dashboard.jsx';



function App() {
 return (
     <>
         <Header />
         <div className='container'>
          
           <Routes>
             <Route path="/" element={ <> <Home /> <Hours_Location /> <Info_Checkin /> </> }/>
             <Route path="/home" element={ <> <Home /> <Hours_Location /> <Info_Checkin /> </> }/>
             <Route path="/Checkin" element={ <Checkin /> }/>
             <Route path="/Register" element={ <Register /> }/>
             <Route path="/about" element={ <> <Aboutus /> <Staff /> </>}/>
             <Route path="/devices" element={ <Devices /> }/>
             <Route path="/Login" element={ <Login /> }/>
             <Route path="/employment" element={ <Employment /> }/>
             <Route path="/Dashboard" element={ <Dashboard /> }/>
           </Routes>
           
         </div>
         <Footer />
     </>
 );
}


export default App;





