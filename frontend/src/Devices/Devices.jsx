import ps5 from '../Photos/ps5.png';
import pc from '../Photos/pc.png';
import motion_racing_simulator from '../Photos/motion_racing_simulator.webp';
import nintendo_switch from '../Photos/nintendo_switch.png';
import "./Devices.css";
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

function Devices() {
   
    const [devicesData, setdevicesData] = useState([])

    
    


    const endpoint = `${process.env.REACT_APP_API_URL}devices`

    const gamepoint = `${process.env.REACT_APP_API_URL}gaming`

    

    const fetchData = async() => {
        console.log('fetching...')
        console.log(endpoint)
        const response = await axios.get(endpoint)
        console.log(response)
        const {data} = response
        setdevicesData(data)
        console.log(data)
        return data
    }

    const createGamer = async (deviceNom) => {
        
        const myDeviceData = devicesData.find(device => device.deviceName === deviceNom);

        
        
        let myDeviceNum = myDeviceData.numDevice
        
        let Name = "Ethan Tift"
        let email = "etift8078@sdsu.edu"
        let redID = 123456
        let device = deviceNom
        let playerStatus = myDeviceNum > 0 ? 'inGame' : 'inQueue'
        let position = myDeviceNum > 0 ? 0 : ((myDeviceNum * -1) + 1)

        const body = {Name, email, redID, device, playerStatus, position}

        console.log(body)

        const response = await axios.post(gamepoint + '/', body)

        console.log(response)

        return response.data
        


    }

    const updateDeviceNumber = async (deviceNom) => {
        const myDeviceData = devicesData.find(device => device.deviceName === deviceNom);

        console.log(myDeviceData)

        let myDeviceID = myDeviceData.id
        
        let myDeviceNum = myDeviceData.numDevice - 1

        
        

        

        const response = await axios.patch(endpoint + '/' + myDeviceID + '/', {
            numDevice: myDeviceNum 
        })

        console.log(response)

        return response.data
    
    }



            
    
    const postData = async() => {
        
        let deviceName = "yuh"

        let deviceNum = 10

        const body = [deviceName, deviceNum]
        
        const response = await axios.post(endpoint + '/', body)

        console.log(response)

        return response.data
        

    }
    
    /*
    const handleSendData = async(deviceNam) => {
        const newData = await updateDeviceNumber(deviceNam)
        if (newData) {
            setdevicesData(prevState => [...prevState, newData])
        }

    }
    */

    const handleSendData = async (deviceName) => {
        const newData = await updateDeviceNumber(deviceName);
        const newGamer = await createGamer(deviceName)
        if (newData) {
            setdevicesData(prevState => {
                const updatedData = prevState.map(device => {
                    if (device.deviceName === newData.deviceName) {
                        return newData;
                    }
                    return device;
                });
                return updatedData;
            });
        }
    };
    

    useEffect(() => {
        fetchData()
    }, [])
   
    return (
       <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3 devices">
           <div className="container overflow-hidden">
               <div className="row gy-4 gy-lg-0 justify-content-center images">
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="PS5" onClick = {() => handleSendData('PS5')}>
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
                                       {devicesData.find(device => device.deviceName === "PS5")?.numDevice || '0'}
                                   </button>
                               </Link>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="PC" onClick = {() => handleSendData('PC')}>
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
                                       {devicesData.find(device => device.deviceName === "PC")?.numDevice || '0'}
                                   </button>
                               </Link>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="Switch" onClick = {() => handleSendData('Switch')}>
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
                                       {devicesData.find(device => device.deviceName === "Switch")?.numDevice || '0'}
                                   </button>
                               </Link>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                       <div className="Racing" onClick = {() => handleSendData('Racing')}>
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
                                       {devicesData.find(device => device.deviceName === "Racing")?.numDevice || '0'}
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



