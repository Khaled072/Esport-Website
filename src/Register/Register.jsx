import axios from 'axios'; 
import { useState } from 'react';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8010/registers/', formData); // Make POST request to backend
      console.log(response.data); // Handle response
      // Optionally, you can redirect the user or perform other actions based on the response
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error, show error message, etc.
    }
  };
  
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 Register' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <div className="ps-2 pe-2 pt-1 pb-1 text-center mb-5 mt-3 Greetings">
            <label htmlFor="Greetings">Esports Engagement Center Registration</label>
          </div>
          <form onSubmit={handleSubmit}>
            <MDBInput name='firstName' value={formData.firstName} onChange={handleChange} wrapperClass='mb-2' label='First Name' size='lg' id='form1' type='text'/>
            <MDBInput name='lastName' value={formData.lastName} onChange={handleChange} wrapperClass='mb-2' label='Last Name' size='lg' id='form2' type='text'/>
            <MDBInput name='email' value={formData.email} onChange={handleChange} wrapperClass='mb-2' label='Your Email' size='lg' id='form3' type='email'/>
            <MDBInput name='password' value={formData.password} onChange={handleChange} wrapperClass='mb-2' label='Password' size='lg' id='form4' type='password'/>
            <MDBInput name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} wrapperClass='mb-2' label='Repeat your password' size='lg' id='form5' type='password'/>
            <div className='d-flex flex-row justify-content-start mb-4'>
              <MDBCheckbox name='agreeTerms' checked={formData.agreeTerms} onChange={handleChange} id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <button type='submit' className='mb-4 w-100 button-28' size='lg' role="button">Register</button>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register; 
