import { useState, useEffect } from 'react';
import Esport_Engagement_Center2 from '../Photos/Esport_Engagement_Center2.png';
import Facebook from '../Photos/Facebook.jpg';
import Instagram from '../Photos/Instagram.png';
import Discord from '../Photos/Discord.jpg';
import Twitter from '../Photos/Twitter.png';
import './Footer.css';

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the current year when the component mounts
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer className="footer">
            {/* Widgets - Bootstrap Brain Component */}
            <section className="in-footer py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3">
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                        <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="widget">
                                <img src={Esport_Engagement_Center2} width="320px" height="auto" alt="Esport_Engagement_Center" loading="lazy" />
                                <br /><br />
                            </div>
                            <div className="copyright text-center text-md-start text-white">
                                &copy; <span>{currentYear}</span> San Diego State University | All Rights Reserved
                            </div>
                        </div>
                        <div className="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-12 col-md-5 col-lg-5 col-xl-3">
                            <div className="widget">
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="https://www.sdsu.edu/" className="link-secondary text-decoration-none">SDSU</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://my.sdsu.edu/" className="link-secondary text-decoration-none">MY.SDSU</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://as.sdsu.edu/" className="link-secondary text-decoration-none">ASSOCIATED STUDENTS</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://library.sdsu.edu/" className="link-secondary text-decoration-none">SDSU LIBRARY</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                            <div className="widget">
                                <h4 className="widget-title mb-4">Contact Us</h4>
                                <p className="mb-1">
                                    <a className="link-secondary text-decoration-none" href="tel:+10123456789">(012) 345-6789</a>
                                </p>
                                <p className="mb-0">
                                    <a className="link-secondary text-decoration-none" href="mailto:sandiegostate.esports@gmail.com">sandiegostate.esports@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 py-1 py-sm-1 py-md-0 py-lg-1 py-xxl-0 col-sm-12 col-md-5 col-lg-12 col-xl-3 ms-lg-5">
                            <h3>Follow Us</h3>
                            <ul className="nav justify-content-center me-lg-2 me-md-2 me-sm-2">
                                <li className="nav-item">
                                    <a className="nav-link link-dark" href="https://www.facebook.com/sdsuaztecgaming/" target="_blank">
                                        <img src={Facebook} alt="Facebook" width="26" height="24" className="bi bi-facebook" title="Facebook" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-dark" href="https://discord.gg/6H7ChFsSxy" target="_blank">
                                        <img src={Discord} alt="Discord" width="30" height="24" className="bi bi-discord" title="Discord" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-dark" href="https://www.instagram.com/aztecgamingsdsu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" title="Instagram">
                                        <img src={Instagram} alt="Instagram" width="26" height="26" className="bi bi-instagram" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-dark" href="https://twitter.com/aztecgamingsdsu" target="_blank">
                                        <img src={Twitter} alt="Twitter" width="26" height="26" className="bi bi-twitter" title="Twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
