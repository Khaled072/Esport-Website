
import './AppTimer.css';
import React, { useEffect, useState, useRef } from 'react';


function App() {
    useEffect(()=> {
        console.log(import.meta.env.VITE_API_URL)
    }, [])
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
    const [queuePosition, setQueuePosition] = useState(1);
    const [device, setDevice] = useState('PS5');
    const [userStatus, setUserStatus] = useState('in Queue');
    // The state for our timer
    const [timer, setTimer] = useState("00:00:00");
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };
 
    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        setTimer("01:30:00");
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };
    const renderDeviceImage = () => {
        if (device === 'PS5') {
            return <img src="ps5.png" alt="PS5" />;
        } else if (device === 'Switch') {
            return <img src="nintendo_switch.png" alt="Switch" />;
        } else if (device === 'Racing Simulator') {
            return <img src="motion_racing_simulator.webp" alt="Racing Sim" />;
        } else if (device === 'PC') {
            return <img src="pc.png" alt="PC" />;
        } else {
            return null; // Return null if device is unknown or not specified
        }
    };
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 5400);
        return deadline;
    };
 
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
 
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
    useEffect(() => {
        // Assuming userStatus can be 'inQueue', 'usingDevice' or ''
        if (userStatus === 'in Queue') {
          document.getElementById('timer').style.color = 'red'; // Change to desired color
        } else if (userStatus === 'using Device') {
          document.getElementById('timer').style.color = 'green'; // Change to desired color
        } else {
          document.getElementById('timer').style.color = 'black'; // Default color
        }
      }, [userStatus]);

    return (
    
    <html lang="en">
    
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="_check_in_page.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.3/components/footers/footer-2/assets/css/footer-2.css"/>
    <title>Check In Page</title>
  </head>
    <body>
    
    
    <header>
        <nav class="navbar navbar-expand-lg navbar-light p-3 page-header content">
            <div class="container-fluid">
                <ul class="nav navbar-nav shrink1">
                    <li class="nav-item ms-5 me-2 d-none d-md-inline shrink-item1">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item ms-5 me-2 d-none d-lg-inline shrink-item2">
                        <a class="nav-link" href="#devicepage">Devices</a>
                    </li>                        
                    
                    <div class="dropdown shrink-item2">
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split d-none d-lg-inline" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#"> 
                                    <img src="ps5.png" alt="PS5"/> PlayStation 5
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> 
                                    <img src="pc.png" alt="PC"/> PC (Personal Computer)
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> 
                                    <img src="nintendo_switch.png" alt="NT"/> Nintendo Switch
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> 
                                    <img src="motion_racing_simulator.webp" alt="MRS"/> Motion Racing Simulator 
                                </a>
                            </li>
                        </ul>
                    </div>
                    <li class="nav-item ms-5 me-4 d-none d-md-inline shrink-item1">
                        <a class="nav-link" href="#games">Games</a>
                    </li>
                    <li class="nav-item ms-5 me-4 d-none d-lg-inline shrink-item1">
                        <a class="nav-link" href="#support">Support</a>
                    </li>
                </ul>
                <div class="navbar-brand align-center image">
                    <img src="Esport_Engagement_Center1.png" width="320px" height="auto" alt="Esport_Engagement_Center" loading="lazy" />
                </div>
                <ul class="nav navbar-nav shrink2">
                    <li class="nav-item ms-2 me-5 d-none d-md-inline shrink-item3">
                        <a class="nav-link" href="#waitlist">Waitlist</a>
                    </li>
                    <li class="nav-item ms-2 me-5 d-none d-lg-inline shrink-item4">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item ms-2 me-5 d-none d-md-inline shrink-item3">
                        <a class="nav-link" href="#timer">Timer</a>
                    </li>
                    <li class="nav-item ms-2 me-5 d-none d-lg-inline shrink-item4">
                        <a class="nav-link" href="#employment">Employment</a>
                    </li>                
                </ul>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end align-end" id="main-nav">
                <ul class="navbar-nav">
                    <li class="nav-item ms-3 d-md-none">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item ms-3 d-lg-none">
                        <a class="nav-link" href="#devices">Devices</a>
                        <ul class="navbar-nav">
                            <li class="nav-item ms-5 d-lg-none">
                                <a class="nav-link" href="#sds"> 
                                    <img src="ps5.png" alt="PS5"/> PlayStation 5
                                </a>
                            </li>
                            <li class="nav-item ms-5 d-lg-none">
                                <a class="nav-link" href="#aqd"> 
                                    <img src="pc.png" alt="PC"/> PC (Personal Computer)
                                </a>
                            </li>
                            <li class="nav-item ms-5 d-lg-none">
                                <a class="nav-link" href="#asdsa"> 
                                    <img src="nintendo_switch.png" alt="NT"/> Nintendo Switch
                                </a>
                            </li>
                            <li class="nav-item ms-5 d-lg-none">
                                <a class="nav-link" href="#asdsa"> 
                                    <img src="motion_racing_simulator.webp" alt="MRS"/> Motion Racing Simulator 
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ms-3 d-md-none">
                        <a class="nav-link" href="#games">Games</a>
                    </li>
                    <li class="nav-item ms-3 d-lg-none">
                        <a class="nav-link" href="#employment">Employment</a>
                    </li> 
                    <li class="nav-item ms-3 d-md-none">
                        <a class="nav-link" href="#waitlist">Waitlist</a>
                    </li>
                    <li class="nav-item ms-3 d-lg-none">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item ms-3 d-md-none">
                        <a class="nav-link" href="#timer">Timer</a>
                    </li>      
                    <li class="nav-item ms-3 d-lg-none">
                        <a class="nav-link" href="#support">Support</a>
                    </li>             
                </ul>
            </div>
        </nav>
    </header>
    <div class = 'containering content'>
    <div class="awesome-container">
        <p><span style={{fontWeight: 'bold', color: '#A6192E'}}>Engagement Center Dashboard</span></p>
        <p>User Status: {userStatus}</p>
        <p>Queue Position: {queuePosition}</p>
        <p>Device:</p>
        {renderDeviceImage()}
        <h2 id='timer'>{timer}</h2>
    </div>



    
    
      
      
    </div>    
    
    
    
    <footer class="footer">
        
        <section class="in-footer py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3">
            <div class="container overflow-hidden">
                <div class="row gy-4 gy-lg-0 justify-content-xl-between">
                    <div class="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="widget">
                            <img src="Esport_Engagement_Center2.png" width="320px" height="auto" alt="Esport_Engagement_Center" loading="lazy"/>
                            <br></br>
                        </div>
                        <div class="copyright text-center text-md-start">
                            &copy; <span id="currentYear"></span> San Diego State University | All Rights Reserved
                        </div>
                    </div>
                    <div class="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-12 col-md-5 col-lg-5 col-xl-3">
                        <div class="widget">
                            <ul class="list-unstyled">
                                <li class="mb-2">
                                    <a href="https://www.sdsu.edu/" class="link-secondary text-decoration-none">SDSU</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://my.sdsu.edu/" class="link-secondary text-decoration-none">MY.SDSU</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://as.sdsu.edu/" class="link-secondary text-decoration-none">ASSOCIATED STUDENTS</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://library.sdsu.edu/" class="link-secondary text-decoration-none">SDSU LIBRARY</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                        <div class="widget">
                            <h4 class="widget-title mb-4">Contact Us</h4>
                            <p class="mb-1">
                                <a class="link-secondary text-decoration-none" href="tel:+10123456789">(012) 345-6789</a>
                            </p>
                            <p class="mb-0">
                                <a class="link-secondary text-decoration-none" href="mailto:sandiegostate.esports@gmail.com">sandiegostate.esports@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 py-1 py-sm-1 py-md-0 py-lg-1 py-xxl-0 col-sm-12 col-md-5 col-lg-12 col-xl-3 ms-lg-5">
                        <h3>Follow Us</h3>
                        <ul class="nav justify-content-center me-lg-2 me-md-2 me-sm-2">
                        <li class="nav-item">
                            <a class="nav-link link-dark" href="https://www.facebook.com/sdsuaztecgaming/" target="_blank">
                                <img src="Facebook.jpg" alt="Facebook" width="26" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" title="Facebook" onmouseover="this.title;"/>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-dark" href="https://discord.gg/6H7ChFsSxy" target="_blank">
                                <img src="Discord.jpg" alt="Discord" width="30" height="24" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16" title="Discord" onmouseover="this.title;"/>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-dark" href="https://www.instagram.com/aztecgamingsdsu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" title="Instagram" onmouseover="this.title;">
                                <img src="Instagram.png" alt="Instagram" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"/>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-dark" href="https://twitter.com/aztecgamingsdsu" target="_blank">
                                <img src="Twitter.png" alt="Twitter" width="26" height="26" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" title="Twitter" onmouseover="this.title;"/>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </footer>

    <script src="_check_in_page.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>

  );
}

export default App;

