import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './LoginForm.css'
const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="Get">
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
  )
}

export default LoginForm