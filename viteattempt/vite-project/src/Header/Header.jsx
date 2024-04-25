import Esport_Engagement_Center1 from '../Photos/Esport_Engagement_Center1.png';
import React, { useState } from 'react';
import ps5 from '../Photos/ps5.png';
import ps4 from '../Photos/ps4.png';
import pc from '../Photos/pc.png';
import motion_racing_simulator from '../Photos/motion_racing_simulator.webp';
import nintendo_switch from '../Photos/nintendo_switch.png';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";


function Header() {
    const location = useLocation();
   return (
       // Header
       <header>
           <nav className="navbar navbar-expand-lg navbar-light p-3 page-header content">
               <div className="container-fluid">
                   <ul className="nav navbar-nav shrink1">
                        <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} to="/home">Home</Link>
                        </li>
                        <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/games' ? 'active' : ''}`} to="/games">Games</Link>
                        </li>                       
                       <div className="dropdown shrink-item2">
                           <button type="button" className="btn dropdown-toggle dropdown-toggle-split d-none d-lg-inline" data-bs-toggle="dropdown" aria-expanded="false">
                               <span className="visually-hidden">Toggle Dropdown</span>
                           </button>
                           <ul className="dropdown-menu">
                               <li>
                                   <Link className="dropdown-item" to="/ps5">
                                       <img src={ps5} alt="PS5"/> PlayStation 5
                                   </Link>
                               </li>
                               <li>
                                   <Link className="dropdown-item" to="/ps4">
                                       <img src={ps4} alt="PS4"/> PlayStation 4
                                   </Link>
                               </li>
                               <li>
                                   <Link className="dropdown-item" to="/pc">
                                       <img src={pc} alt="PC" /> PC (Personal Computer)
                                   </Link>
                               </li>
                               <li>
                                   <Link className="dropdown-item" to="/nintendo_switch">
                                       <img src={nintendo_switch} alt="NT" /> Nintendo Switch
                                   </Link>
                               </li>
                               <li>
                                   <Link className="dropdown-item" to="/motion_racing_simulator">
                                       <img src={motion_racing_simulator} alt="MRS" /> Motion Racing Simulator
                                   </Link>
                               </li>
                           </ul>
                       </div>
                       <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/devices' ? 'active' : ''}`} to="/devices">Devices</Link>
                        </li>
                        <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`} to="/support">Support</Link>
                        </li>
                   </ul>
                   <div className="navbar-brand align-center image">
                       <img src={Esport_Engagement_Center1} alt="Esport_Engagement_Center" loading="lazy" style={{ maxWidth: "285px", height: "auto" }} />
                   </div>
                   <ul className="nav navbar-nav shrink2">
                   <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/employment' ? 'active' : ''}`} to="/employment">Employment</Link>
                        </li>               
                        <li className="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                            <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Login</Link>
                        </li>
                   </ul>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
               </div>
               <div className="collapse navbar-collapse justify-content-end align-end" id="main-nav">
                   <ul className="navbar-nav">
                   <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} to="/home">Home</Link>
                </li>
                <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/games' ? 'active' : ''}`} to="/games">Games</Link>
                
                           <ul className="navbar-nav">
                               <li className="nav-item ms-5 d-lg-none">
                                   <Link className="nav-link" to="/ps5">
                                       <img src={ps5} alt="PS5" /> PlayStation 5
                                   </Link>
                               </li>
                               <li className="nav-item ms-5 d-lg-none">
                                   <Link className="nav-link" to="/ps4">
                                       <img src={ps4} alt="PS4" /> PlayStation 4
                                   </Link>
                               </li>
                               <li className="nav-item ms-5 d-lg-none">
                                   <Link className="nav-link" to="/pc">
                                       <img src={pc} alt="PC" /> PC (Personal Computer)
                                   </Link>
                               </li>
                               <li className="nav-item ms-5 d-lg-none">
                                   <Link className="nav-link" to="/nintendo_switch">
                                       <img src={nintendo_switch} alt="NT" /> Nintendo Switch
                                   </Link>
                               </li>
                               <li className="nav-item ms-5 d-lg-none">
                                   <Link className="nav-link" to="/motion_racing_simulator">
                                       <img src={motion_racing_simulator} alt="MRS" /> Motion Racing Simulator
                                   </Link>
                               </li>
                           </ul>
                       </li>
                       <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/devices' ? 'active' : ''}`} to="/devices">Devices</Link>
                </li>
                <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`} to="/support">Support</Link>
                </li>
                <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                </li>
                <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/employment' ? 'active' : ''}`} to="/employment">Employment</Link>
                </li>
                <li className="nav-item ms-3 d-md-none">
                    <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Login</Link>
                </li>
            </ul>
        </div>
           </nav>
       </header>
       );
   }
  
export default Header;
 