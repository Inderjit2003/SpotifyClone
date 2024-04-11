import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LsNavbar from './LsNavbar'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', formValues);
      console.log(response.data); // Handle response data (e.g., store token in localStorage)
      // Redirect or perform actions based on successful login
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div className={`${Style.bgls}`}>
      <LsNavbar />
      {/* Your UI code */}
      <div className={`${Style.LoginDiv}`} >
      <Card className={``} style={{ backgroundColor: 'black', color: 'white', width: '43rem', alignItems: 'center', height: '34rem' }}>
        <Card.Body>
          <h1 className='fw-bold mt-3 mb-2 ' style={{ textAlign: 'center' }}> Login to Spotify</h1>
          <hr className=' my-4' />
          <div className={`mt-1 ${Style.loginform}`}>
            <div className={`${Style.textinputdiv}`}>
              <div className='field'>
                <label htmlFor='email' className="form-label">Email ID</label>
              </div>
              <div className={`${Style.inputcontainer}`}>
                <input
                  type='email'
                  placeholder='emailID'
                  className={`form-label`}
                  value={formValues.email}
                  onChange={handleChange}
                  name='email'
                  id='email'
                  required
                />
              </div>
            </div>
          </div>
          <div className={`mt-2 ${Style.loginform}`}>
            <div className={`${Style.textinputdiv}`}>
              <div className='field'>
                <label htmlFor="Password" className="form-label text-white">Password</label>
              </div>
              <div className={Style.inputcontainer}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={`form-label`}
                  name='password'
                  onChange={handleChange}
                  value={formValues.password}
                  id="Password"
                  required
                />
                <button
                  type="button"
                  className={`btn  ${Style.inputiconbutton}`}
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
            </div>
          </div>
          <div>
            <Button
              className={`rounded-pill my-4 mt-5 fw-semibold ${Style.button}`}
              style={{ backgroundColor: '#1ed760', borderColor: '#1ed760', width: '25rem', color: 'black' }}
              // onClick={handleLogin} // Call handleLogin function on button click
              href='/Home'
            >
              Login In
            </Button>
            <br />
            <div style={{ color: 'rgb(104, 105, 104)', marginLeft: '115px' }}>
              <span>Don't have an account?</span>
            </div>
            <div style={{ color: 'white', marginLeft: '125px' }}>
              <Link to='/signup' style={{ color: 'white' }}>Signup for Spotify</Link>
            </div>
            <br />
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}
