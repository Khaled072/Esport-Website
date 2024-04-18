
import './AppEmployment.css';

function App() {
  
    const handleClick = () => {
        window.location.href = 'https://library.sdsu.edu/about/employment-opportunities/student-positions';
      };

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
    
    <div class ='content' style={{ display: 'flex', justifyContent: 'center' }} >
        <div class="row ">
            <div class="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-3">

    <div className="empInfo content" style={{ backgroundColor: '#f2f2f2', padding: '20px', marginTop: '100px' }}>
    <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Employment Opportunites at the Esports Engagement Center</h1>
    <p style={{ fontSize: '24px' }}>Interested in joining the SDSU Esports Engagement Center team?</p>
    <p style={{ fontSize: '24px' }}>There are many amazing opportunities available the SDSU Esports Engagement Center! Students who join the team will find an engaging, highly social environment where they can discuss their favorite games or show off some skill. The team is responsible for managing the diverse gaming consoles available at the center, and ensuring that all our visitors have an enjoyable experience! Join the team today by filling out the Employment Form.</p>
    </div>
    </div>
    </div>
    </div>
    <div class ='content' style={{ display: 'flex', justifyContent: 'right', alignItems: 'center'  }} >
        <div class="row ">
            <div class="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <div class="leftpls content">
    
        
        
        
            <a href = "https://library.sdsu.edu/about/employment-opportunities/student-positions"> 
            <button style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '-500px', marginRight: '100px', padding: '40px 60px', marginLeft: 'auto'}} type="button" class="btn submit-button goodButton" onclick={handleClick}>Employment Form</button>
            </a>
        
    
    </div>
    </div>
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
