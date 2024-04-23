import "./Home.css";

function Hours_Location() {
    return (
        <div className="home mt-3">
            <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3">
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                        <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5">
                            <h3>Location:</h3>
                            <p className="location">
                                The Esports Engagement Center is located in the 24-hour section of the University Library.
                            </p>
                            <h3>Opening Hours:</h3>
                            <table>
                                <tr>
                                    <td>Monday</td>
                                    <td>10:00 AM - 10:00 PM PST</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>10:00 AM - 10:00 PM PST</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>10:00 AM - 10:00 PM PST</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>10:00 AM - 10:00 PM PST</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>10:00 AM - 10:00 PM PST</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>Closed</td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1701.3453502550826!2d-117.070404!3d32.77522100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95686545437bd%3A0x6963f9d84bc438ec!2sSDSU%20Library!5e1!3m2!1sen!2sus!4v1713230988865!5m2!1sen!2sus" 
                                width="600" 
                                height="450" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>                   
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
    
export default Hours_Location;
  