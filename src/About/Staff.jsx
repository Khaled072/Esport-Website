import "./Aboutus.css"
import anonymous from '../Photos/anonymous.webp';

function Staff() {
    return (
        // Meet Our Staff
        <div className="staff content mb-5 mt-4">
            <div className="container people">
                <div className="row">
                    <h1 className="staffs">MEET OUR STAFF</h1>
                    <h2><br/></h2>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center padding">
                        <figure className="figure">
                            <img src={anonymous} className="figure-img img-fluid rounded-circle" width="280px" height="auto" alt="Anonymous" />
                            <figcaption className="figure-caption text-center">
                                <h3>Name</h3>
                                <p>
                                    <strong className="text-uppercase letter-spacing-1 position">MANAGER</strong>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center padding">
                        <figure className="figure">
                            <img src={anonymous} className="figure-img img-fluid rounded" width="280px" height="auto" alt="Anonymous" />
                            <figcaption className="figure-caption text-center">
                                <h3>Name</h3>
                                <p>
                                    <strong className="text-dark text-uppercase letter-spacing-1 position">COORDINATOR</strong>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center padding">
                        <figure className="figure">
                            <img src={anonymous} className="figure-img img-fluid rounded" width="280px" height="auto" alt="Anonymous" />
                            <figcaption className="figure-caption text-center">
                                <h3>Name</h3>
                                <p>
                                    <strong className="text-dark text-uppercase letter-spacing-1 position">ASSISTANT DIRECTOR</strong>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center padding">
                        <figure className="figure">
                            <img src={anonymous} className="figure-img img-fluid rounded" width="280px" height="auto" alt="Anonymous" />
                            <figcaption className="figure-caption text-center">
                                <h3>Name</h3>
                                <p>
                                    <strong className="text-dark text-uppercase letter-spacing-1 position">OPERATIONS MANAGER</strong>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center padding">
                        <figure className="figure">
                            <img src={anonymous} className="figure-img img-fluid rounded" width="280px" height="auto" alt="Anonymous" />
                            <figcaption className="figure-caption text-center">
                                <h3>Name</h3>
                                <p>
                                    <strong className="text-dark text-uppercase letter-spacing-1 position">FRONT DESK</strong>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center padding">
                        <figure className="figure">
                            <img src={anonymous} className="figure-img img-fluid rounded" width="280px" height="auto" alt="Anonymous" />
                            <figcaption className="figure-caption text-center">
                                <h3>Name</h3>
                                <p>
                                    <strong className="text-dark text-uppercase letter-spacing-1">STUDENT ASSISTANCE</strong>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default Staff;
  