

import './Employment.css';
import { Link } from 'react-router-dom';


function Employment() {
     return (
       <div>
           <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3">
               <div className="container overflow-hidden">
                   <div className="row gy-4 gy-lg-0 justify-content-center">
                       <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 box mt-4">
                           <h1>
                           Employment Opportunities at the Esports Engagement Center
                           </h1>
                           <p className='mt-2, mb-2'>
                               Interested in joining the SDSU Esports Engagement Center team?
                           </p>
                           <p>
                               There are many amazing opportunities available at the SDSU Esports Engagement Center!
                               Students who join the team will find an engaging, highly social environment where they
                               can discuss their favorite games or show off some skill. The team is responsible for
                               managing the diverse gaming consoles available at the center and ensuring that all our
                               visitors have an enjoyable experience! Join the team today by filling out the Employment Form.
                           </p>
                       </div>
                       <div className="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mt-xs-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5">
                           <Link to="https://library.sdsu.edu/about/employment-opportunities/student-positions" target="_blank">
                               <button className="button-30" role="button">Student Positions</button>
                           </Link>
                       </div>
                       <div className="col-12 py-1 py-sm-1 py-md-1 py-lg-1 py-xxl-1 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mt-xs-0 mt-sm-0 mt-md-0 mt-lg-5 mt-xl-5">
                           <Link to="https://docs.google.com/forms/d/e/1FAIpQLScorP4ff54USkqq3lWa5IdkFIOHahkJMhGk4BwYHs81Z8bcOg/viewform?usp=sf_link" target="_blank">
                               <button className="button-30" role="button">Employment Form</button>
                           </Link>
                       </div>
                   </div>
               </div>
           </section>
           <br /><br />
       </div>
     );
}


export default Employment;



