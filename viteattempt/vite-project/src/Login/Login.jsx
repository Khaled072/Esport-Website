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
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/login', loginData);
            const { token, user } = response.data;
            localStorage.setItem('username', user.username);
            localStorage.setItem('token', token);
            setLoginData({ username: '', password: '' });
            setError(null);
            navigate('/Home');
        } catch (error) {
            setError('Invalid login credentials');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value,
        }));
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
                                label="Username"
                                id="username"
                                type="text"
                                size="lg"
                                name="username"
                                value={loginData.username}
                                onChange={handleChange}
                            />

                            <MDBInput
                                wrapperClass="mb-4 mx-5 w-100 text-black"
                                label="Password"
                                id="password"
                                type="password"
                                size="lg"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
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