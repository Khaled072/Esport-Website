import event1 from '../Photos/event1.jpeg';
import event2 from '../Photos/event2.jpeg';
import event3 from '../Photos/event3.jpeg';
import event4 from '../Photos/event4.jpeg';
import "./Home.css";

function Home() {
    return (
        <div>
            <strong>
                <h1 className="page-title">Welcome to the Esports Engagement Center</h1>
            </strong>
            <div className="text-center">
                <hr className="mx-auto col-8 col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 HRhr" />
            </div>
            <div className="home">
                <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3 col-xl-12">
                    <div className="container overflow-hidden">
                        <div className="row gy-4 gy-lg-0 justify-content-between col-xl-12">
                            <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-5 col-sm-6 col-md-3 col-lg-4 col-xl-5 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 Events">
                                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner events-photos">
                                        <div className="carousel-item active">
                                            <img src={event1} className="d-block w-100 bg-secondary" alt="event1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={event2} className="d-block w-100 bg-secondary" alt="event2" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={event3} className="d-block w-100 bg-secondary"  alt="event3" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={event4} className="d-block w-100 bg-secondary" alt="event4" />
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
                            <div className="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-6 col-md-3 col-lg-4 col-xl-5 mt-lg-2 mt-xl-2 mt-xxl-2 events">
                                <h4 className="mt-2 text-center">Latest Updates & News Events</h4>
                                <hr className='HRhr'/>
                                <ul className="events-links">
                                    <li>
                                        <strong>
                                            <a href="https://www.sdsu.edu/news/2023/11/sdsus-cutting-edge-esports-engagement-center-bridges-gaming-wellness-student-success" target="_blank" rel="noopener noreferrer">
                                                SDSU&apos;s Cutting-Edge Esports Engagement Center Bridges Gaming, Wellness, and Student Success
                                            </a>
                                        </strong>
                                    </li>
                                    <br />
                                    <li>
                                        <strong>
                                            <a href="https://thedailyaztec.com/116064/sports/aztec-gaming-hosts-the-first-ever-competition-in-the-esports-engagement-center/" target="_blank" rel="noopener noreferrer">
                                                Aztec Gaming hosts the first-ever competition in the Esports Engagement Center
                                            </a>
                                        </strong>
                                    </li>
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
    
export default Home;
  