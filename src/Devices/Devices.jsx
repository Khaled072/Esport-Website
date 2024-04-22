// src/components/Devices.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // To navigate to the login page
import ps5 from '../Photos/ps5.png';
import pc from '../Photos/pc.png';
import motion_racing_simulator from '../Photos/motion_racing_simulator.webp';
import nintendo_switch from '../Photos/nintendo_switch.png';
import './Devices.css'; // Ensure the CSS exists

function Devices() {
  const [counts, setCounts] = useState({
    PS5: 2,
    PC: 4,
    Switch: 0,
    Racing: 1,
  });
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate(); // To redirect to login if needed

  // Fetch device counts from the backend when the component mounts
  useEffect(() => {
    const fetchDeviceCounts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_all_device_counts'); // Backend endpoint
        setCounts(response.data);
      } catch (error) {
        console.error('Error fetching device counts:', error);
      }
    };

    fetchDeviceCounts(); // Initial data fetch
  }, []);

  const decrementDeviceCount = async (device) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/decrement/${device}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the header
        },
      });

      if (response.status === 200) {
        setCounts((prev) => ({
          ...prev,
          [device]: response.data.count, // Update the count with the new data from the server
        }));
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error decrementing device count:', error);
    }
  };

  const handleButtonClick = (device) => {
    if (!token) {
      // Redirect to the login page if the user isn't logged in
      navigate('/login');
      return;
    }

    decrementDeviceCount(device); // Decrement the count in the backend
  };

  return (
    <section className="devices">
      <div className="container">
        <div className="row justify-content-center">

          {/* PS5 Device */}
          <div className="col-md-4">
            <div className="PS5">
              <img src={ps5} alt="PS5" />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleButtonClick('PS5')}
              >
                {counts.PS5}
              </button>
            </div>
          </div>

          {/* PC Device */}
          <div className="col-md-4">
            <div className="PC">
              <img src={pc} alt="PC" />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleButtonClick('PC')}
              >
                {counts.PC}
              </button>
            </div>
          </div>

          {/* Nintendo Switch Device */}
          <div className="col-md-4">
            <div className="Switch">
              <img src={nintendo_switch} alt="Nintendo Switch" />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleButtonClick('Switch')}
              >
                {counts.Switch}
              </button>
            </div>
          </div>

          {/* Motion Racing Simulator Device */}
          <div className="col-md-4">
            <div className="Racing">
              <img src={motion_racing_simulator} alt="Racing Simulator" />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleButtonClick('Racing')}
              >
                {counts.Racing}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Devices;


/*
import ps5 from '../Photos/ps5.png';
import pc from '../Photos/pc.png';
import motion_racing_simulator from '../Photos/motion_racing_simulator.webp';
import nintendo_switch from '../Photos/nintendo_switch.png';
import "./Devices.css";
import { Link } from 'react-router-dom';


function Devices() {
   return (
       <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3 devices">
           <div className="container overflow-hidden">
               <div className="row gy-4 gy-lg-0 justify-content-center images">
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="PS5">
                           <Link to="/Login" id="ps5" target="_blank">
                               <img src={ps5} alt="PS5"/>
                           </Link>
                           <div className="ButtonPS">
                               <Link to="/Login" target="_blank">
                                   <button
                                       type="button"
                                       className="btn btn-danger"
                                       style={{
                                           '--bs-btn-padding-y': '0.75rem',
                                           '--bs-btn-padding-x': '.5rem',
                                           '--bs-btn-font-size': '1rem'
                                       }}
                                   >
                                       2
                                   </button>
                               </Link>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="PC">
                           <Link to="/Login" id="pc" target="_blank">
                               <img src={pc} alt="PC"/>
                           </Link>
                           <div className="ButtonPC">
                               <Link to="/Login" target="_blank">
                                   <button
                                       type="button"
                                       className="btn btn-danger"
                                       style={{
                                           '--bs-btn-padding-y': '0.75rem',
                                           '--bs-btn-padding-x': '.5rem',
                                           '--bs-btn-font-size': '1rem'
                                       }}
                                   >
                                       4
                                   </button>
                               </Link>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="Switch">
                           <Link to="/Login" id="switch" target="_blank">
                               <img src={nintendo_switch} alt="Switch"/>
                           </Link>
                           <div className="ButtonSwitch">
                               <Link to="/Login" target="_blank">
                                   <button
                                       type="button"
                                       className="btn btn-danger"
                                       style={{
                                           '--bs-btn-padding-y': '0.75rem',
                                           '--bs-btn-padding-x': '.5rem',
                                           '--bs-btn-font-size': '1rem'
                                       }}
                                   >
                                       0
                                   </button>
                               </Link>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="Racing">
                           <Link to="/Login" id="racing" target="_blank">
                               <img src={motion_racing_simulator} alt="Racing"/>
                           </Link>
                           <div className="ButtonRacer">
                               <Link to="/Login" target="_blank">
                                   <button
                                       type="button"
                                       className="btn btn-danger"
                                       style={{
                                           '--bs-btn-padding-y': '0.75rem',
                                           '--bs-btn-padding-x': '.5rem',
                                           '--bs-btn-font-size': '1rem'
                                       }}
                                   >
                                       1
                                   </button>
                               </Link>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
   );
}


export default Devices;



*/