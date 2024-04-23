import "./Home.css";
import { Link } from 'react-router-dom';


function Logout() {

   return (
       <div className="info-check-in mt-3">
           <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3">
               <div className="container overflow-hidden">
                   <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                       <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-6" style={{margin: '20%'}}>
                           <p className="p-info text-center box">
                            You're Successfully Logged Out. Thank You For Coming!
                           </p>
                       </div>
                   </div>
               </div>
           </section>
       </div>
   );
}
  
export default Logout;
 

