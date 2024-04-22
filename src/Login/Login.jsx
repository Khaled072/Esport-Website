
import "./Login.css";
import { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

    try {
        const response = await axios.post('http://127.0.0.1:8000/login', {
            username: email,
            password: password,
        });

        // Save the token and redirect
        localStorage.setItem('authToken', response.data.token);

        // Navigate to the Devices page
        navigate('/Devices');

        } catch (err) {
        setError('Invalid login credentials');
    }
  };

  return (
    <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
            <MDBCard
                className="bg-dark text-white my-5 mx-auto Login"
                style={{ borderRadius: '1rem', maxWidth: '400px' }}
            >
                <MDBCardBody
                className="p-5 d-flex flex-column align-items-center mx-auto w-100"
                >
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-50 mb-5">Please enter your login and password!</p>
                
                {error && <p className="text-danger">{error}</p>}
                
                <MDBInput
                    wrapperClass="mb-4 mx-5 w-100 text-black"
                    label="Email address"
                    id="email"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <MDBInput
                    wrapperClass="mb-4 mx-5 w-100 text-black"
                    label="Password"
                    id="password"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <p className="small mb-3 pb-lg-2">
                    <a className="text-50" href="#!">Forgot password?</a>
                </p>
                
                <button
                    type="submit"
                    className="mb-3 button-20"
                    size="lg"
                    role="button"
                    onClick={handleLogin}
                >
                    Login
                </button>
                
                <div>
                    <p className="mb-0">
                    Don&apos;t have an account?  
                    <Link to="/Register" className="text-50 fw-bold"> Sign Up</Link>
                    </p>
                </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

export default Login;
