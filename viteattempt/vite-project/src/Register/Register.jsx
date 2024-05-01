

import "./Register.css";

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate after registration
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '', 
  });

  const userpoint = 'http://127.0.0.1:8000/registers/';
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
      // Check if password and password_confirmation match
      if (formData.password !== formData.password_confirmation) {
        throw new Error("Password and confirmation don't match");
      }
  
      const response = await axios.post(userpoint , formData);
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      console.log('Registration successful:', response.data);
      setSuccessMessage('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response?.data);
      const errorMsg = error.response?.data || 'An error occurred. Please try again.';
      if (errorMsg.username && errorMsg.username.includes('A user with that username already exists.')) {
        setErrorMessage('Username must be unique.');
      } else {
        setErrorMessage(errorMsg);
      }
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              wrapperClass="mb-2"
              label="Email"
              size="lg"
              id="form2"
              type="email"
            />
            <MDBInput
              name="password"
              value={formData.password}
              onChange={handleChange}
              wrapperClass="mb-2"
              label="Password"
              size="lg"
              id="form3"
              type="password"
            />
            <MDBInput
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              wrapperClass="mb-2"
              label="Confirm Password"
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