// import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
// import { fafont } from '@fortawesome/react-fontawesome';
// import { faUser,faLock,faEnvelope} from 'react-icons';
// import {FontAwesomeIcon} from 'react-fontawesome'
// import { }
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'
const LoginForm = () => {
  // const {isSignIpMode,setIsSignupMode}=useState(false);

  // const handlesignupClick = () => {
  //   setIsSignupMode(true);
  // };
  // const handlesigninClick =() => {
  //   isSignIpMode(false);
  // };
  return (
   <>
    <div className='wrapper' >
        <form>
            <h1>Login</h1>
                <div className='input-box'>
                    <input type="text"placeholder='Username' required></input><FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password"placeholder='Password' required></input><FaEye className='icon'/>
                </div>
                <div className="remember-forgot">
                  <lable><input type="checkbox"/>Remember me</lable>
                  <a href="#">Forgot password</a>
                </div>

                  <button type="submit">Login</button>
                  <div className="register-link"><p>Don't have an account <a href="/Sign-Up">Register</a></p>
                </div>
        </form>
    </div>

    {/* <div className={`logincontainer ${isSignIpMode ? 'Sign-up-mode': ''}`}> */}
      {/* <div className='form-container'>
        <div className="Signin-Signup">
          <form  className='sign-in-form loginForm'>
            <h2 className='title'>Sign in</h2>

            <div className="input-fields">
            <FontAwesomeIcon icon="fa-solid fa-user" className='my-auto mx-auto'/>
              <input className='LoginInput' type='text' placeholder='Username'/>
            </div>

          </form>
        </div>
      </div> */}
    {/* </div> */}
   </>
  )
}

export default LoginForm