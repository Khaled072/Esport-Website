import EEC1 from '../Photos/EEC1.jpeg';
import EEC2 from '../Photos/EEC2.jpeg';
import EEC3 from '../Photos/EEC3.jpeg';
import EEC4 from '../Photos/EEC4.jpeg';
import "./Aboutus.css"

function Aboutus() {
    return (
        // About Us
        <div className="aboutus">
            <div className="rows justify-content-center">
                <div>
                    <div className="container overflow-hidden">
                        <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={EEC1} className="d-block w-100 bg-secondary" style={{ width: "100%" }} alt="EEC1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={EEC2} className="d-block w-100 bg-secondary" style={{ width: "100%" }} alt="EEC2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={EEC3} className="d-block w-100 bg-secondary" style={{ width: "100%" }} alt="EEC3" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={EEC4} className="d-block w-100 bg-secondary" style={{ width: "100%" }} alt="EEC4" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 info">
                    <h1>Who Are We?</h1>
                    <hr className="col-xs-8 col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 hr-line" />
                    <p>
                        The Esports Engagement Center (EEC) at San Diego State University represents a significant transformation from a 
                        time when students struggled to find spaces for gaming activities. With the support of various university divisions,
                        including the University Library, Student Affairs, and Information Technology, the EEC now boasts state-of-the-art
                        gaming equipment, a spacious lounge area, and wellness programming aimed at addressing student health concerns 
                        associated with excessive screen time. Designed to promote SDSU&apos;s values of inclusivity and student success, the 
                        center not only caters to esports enthusiasts but also offers resources for career development and scholarly 
                        research in the gaming industry.
                    </p>
                    <p>
                        The Esports Engagement Center contributes to skills development, including problem solving, critical thinking, 
                        information literacy, communication, collaboration, diversity, perseverance and creativity. Additionally, the 
                        center seeks to instill a sense of belonging and community among students, faculty, and staff. To accomplish 
                        this, the Esports Engagement Center features a range of activities activities including:
                        <ul className="red-dots ms-5">
                            <li className="mt-2">Coordinated Care Advising</li>
                            <li className="mt-2">Collaborative educational, social, and well-being events and workshops</li>
                            <li className="mt-2">Recognized Student Organization advising and programming</li>
                            <li className="mt-2">Evening, late-night, and weekend programming</li>
                            <li className="mt-2">Competitive esports team engagement</li>
                            <li className="mt-2">Non-competitive esports play </li>
                            <li className="mt-2">Research</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}
    
export default Aboutus;
  