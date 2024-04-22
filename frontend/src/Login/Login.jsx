import React from 'react';
import {
 MDBBtn,
 MDBContainer,
 MDBRow,
 MDBCol,
 MDBCard,
 MDBCardBody,
 MDBInput,
 MDBIcon
} from 'mdb-react-ui-kit';
import "./Login.css";
import { Link } from 'react-router-dom';


function Login() {
 return (
    <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
                <MDBCard className='bg-dark text-white my-5 mx-auto Login' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                        <h2 className="fw-bold mb-2 text-uppercase" style={{color: "black"}}>Login</h2>
                        <p className="text-50 mb-5" style={{color: "black"}}>Please enter your login and password!</p>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Email address' id='formControlLg' type='email' size="lg"/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Password' id='formControlLg' type='password' size="lg"/>
                        <p className="small mb-3 pb-lg-2">
                            <a className="text-50" style={{color: "black"}} href="#!">Forgot password?</a>
                        </p>
                        <button type='submit' className='mb-3 button-20' size='lg' role="button">Login</button>
                        <div>
                            <p className="mb-0" style={{color: "black"}}>Don&apos;t have an account? <Link to="/Register" className="text-50 fw-bold" style={{color: "black"}}>Sign Up</Link></p>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
   </MDBContainer>
 );
}


export default Login;



