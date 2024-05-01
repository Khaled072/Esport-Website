import './Dashboard.css';
import ps5 from '../Photos/ps5.png';
import pc from '../Photos/pc.png';
import motion_racing_simulator from '../Photos/motion_racing_simulator.webp';
import nintendo_switch from '../Photos/nintendo_switch.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Dashboard() {
    const [gamerData, setGamerData] = useState([]);

    const storedValue = localStorage.getItem('username');

    const gamepoint = `${import.meta.env.VITE_API_URL}gaming`

    if (!storedValue) {
        return (
            <div>
                <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3 devices gologin">
                <div className="container overflow-hidden">
                <div className="legend mb-3">
                <p>Please <Link to="/login">login</Link> to access this page.</p>
                </div>
                </div>
                </section>
            </div>
        );
    }

    const getDeviceImage = () => {
        const gamingData = gamerData.find((gaming) => gaming.Name === storedValue);
        if (gamingData) {
        switch (gamingData.device) {
            case 'PS5':
            return <img src={ps5} alt="PS5" style={{ width: '50%' }}/>;
            case 'PC':
            return <img src={pc} alt="PC" style={{ width: '50%' }}/>;
            case 'Racing':
            return <img src={motion_racing_simulator} alt="Motion Racing Simulator" style={{ width: '50%' }}/>;
            case 'Switch':
            return <img src={nintendo_switch} alt="Nintendo Switch" style={{ width: '50%' }}/>;
            default:
            return null;
        }
        }
        return null;
    };
const fetchData = async () => {
        try {
        const response = await axios.get(gamepoint);
        const { data } = response;
        setGamerData(data);
        console.log(token)
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const gamingData = gamerData.find((gaming) => gaming.Name === storedValue);

    

    return (
        <section className="dashboard">
            <div className="dashboardcontent">
                <h1 className="dashboardtitle">Engagement Center Dashboard</h1>
                <p className="dashboardstatus">
                    User Status: {gamingData?.status || 'Not Found'}
                </p>
                <p className="dashboardqueue">
                    Queue Position: {gamingData?.position || 'N/A'}
                </p>
                <div className="dashboard__device">
                    <p>Device:</p>
                    {getDeviceImage()}
                </div>
            </div>
        </section>
    );
}

export default Dashboard;