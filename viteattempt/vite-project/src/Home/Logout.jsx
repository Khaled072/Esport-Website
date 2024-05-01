import "./Home.css";
import { Link } from 'react-router-dom';
import axios from 'axios';



function Info_Checkin() {

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Authorization token not provided');
    
            // Send the logout request without including the username
            await axios.post('http://127.0.0.1:8000/logout/', null, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
    
            // Clear token and username from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('authtoken')
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };
    
    
    
    
    

   return (
       <div className="info-check-in mt-3 fixfoot">
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
                           <Link to="/login" target="_blank">
                               <button className="button-27" role="button">Check-in</button>
                           </Link>
                           <Link to="/Register" target="_blank">
                               <button className="button-27" role="button">Register</button>
                           </Link>
                           <Link to="/logout" target="_blank">
                               <button className="button-27" onClick = {() => handleLogout()}role="button">Logout</button>
                            </Link>

                       </div>
                   </div>
               </div>
           </section>
       </div>
   );
}
  
export default Info_Checkin;