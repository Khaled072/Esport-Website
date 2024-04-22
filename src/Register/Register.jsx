
import "./Register.css";

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate after registration
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Use to navigate after successful registration

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/registers/',
        formData
      );
      const { token } = response.data; // Use token to store in local storage
      localStorage.setItem('authToken', token); // Store token in local storage
      console.log('Registration successful:', response.data);
      setSuccessMessage('Registration successful!');
      
      // Optionally, navigate to another page after successful registration
      navigate('/login'); // Or any other route after registration
    } catch (error) {
      console.error('Registration failed:', error.response?.data);
      const errorMsg = error.response?.data || 'An error occurred. Please try again.';
      setErrorMessage(errorMsg); 
    }
  };

  return (
    <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image">
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5 Register" style={{ maxWidth: '600px' }}>
        <MDBCardBody className="px-5">
          <div className="ps-2 pe-2 pt-1 pb-1 text-center mb-5 mt-3 Greetings">
            <label htmlFor="Greetings">Esports Engagement Center Registration</label>
          </div>
          <form onSubmit={handleSubmit}>
            <MDBInput
              name="username"
              value={formData.username}
              onChange={handleChange}
              wrapperClass="mb-2"
              label="Username"
              size="lg"
              id="form1"
              type="text"
            />
            <MDBInput
              name="password"
              value={formData.password}
              onChange={handleChange}
              wrapperClass="mb-2"
              label="Password"
              size="lg"
              id="form4"
              type="password"
            />
            <button type="submit" className="mb-4 w-100 button-28" size="lg" role="button">
              Register
            </button>
          </form>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;


/*
<MDBInput name='firstName' value={formData.firstName} onChange={handleChange} wrapperClass='mb-2' label='First Name' size='lg' id='form1' type='text'/>
            <MDBInput name='lastName' value={formData.lastName} onChange={handleChange} wrapperClass='mb-2' label='Last Name' size='lg' id='form2' type='text'/>
            <MDBInput name='email' value={formData.email} onChange={handleChange} wrapperClass='mb-2' label='Your Email' size='lg' id='form3' type='email'/>
            <MDBInput name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} wrapperClass='mb-2' label='Repeat your password' size='lg' id='form5' type='password'/>
            <div className='d-flex flex-row justify-content-start mb-4'>
              <MDBCheckbox name='agreeTerms' checked={formData.agreeTerms} onChange={handleChange} id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            */