import "./Home.css";
import { Link } from 'react-router-dom';

function Info_Checkin() {
    return (
        <div className="info-check-in mt-3">
            <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3">
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                        <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-6">
                            <p className="p-info">
                                The San Diego State University Esports Engagement Center is a highly collaborative project between the Division of
                                Student Affairs and Campus Diversity, Information Technology Division, and University Library. The Esports Engagement
                                Center seeks to foster a positive student experience through the delivery of a holistic program centered on curricular
                                and co-curricular learning, student success, advising, student activities, well-being, career development, and research.
                            </p>
                        </div>
                        <div className="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-sm-5">
                            <p className="check-in-button">
                                Click below to check-in:
                            </p>
                            <Link to="/Checkin" target="_blank">
                                <button className="button-28" role="button">Check-in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
    
export default Info_Checkin;
  