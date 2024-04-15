import React ,{ useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import log from '../Assets/car.svg';
import register from '../Assets/signout.svg';
import './Signup.css'

const Signup = () => {
  const [isSignupMode , setSignupMode ] = useState(false);

  const handlesignupClick =() => {
    setSignupMode(true);
  }
  const handlesigninClick =() => {
    setSignupMode(false);
  }
  return (
<>
<div className={`container-fluid ${isSignupMode ? 'sign-up-mode': ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in </h2>
            <div className="input-field">
           <i> <FaUser/></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <i> <FaLock /> </i> 
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid"></input>
            <p className="social-text">or sign in with social platforms</p>
            <div className="social-media">
            <a href="/" className="social-icon">
            <FaFacebook />
            </a>
            <a href="/" className="social-icon">
           <FaTwitter/>
            </a>
            <a href="/" className="social-icon">
            <FaGoogle />
            </a>
            <a href="/" className="social-icon">
            <FaLinkedinIn />
            </a>
            </div>
          </form>
          <form action="" className="sign-up-form">
            <h2 className="title">Sign up </h2>
            <div className="input-field">
           <i> <FaUser /></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
           <i> <MdEmail /></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
            <i> <FaLock /> </i> 
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid"></input>
            <p className="social-text">or sign up with social platforms</p>
            <div className="social-media">
            <a href="/" className="social-icon">
            <FaFacebook />
            </a>
            <a href="/" className="social-icon">
           <FaTwitter/>
            </a>
            <a href="/" className="social-icon">
            <FaGoogle />
            </a>
            <a href="/" className="social-icon">
            <FaLinkedinIn />
            </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illum!</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handlesignupClick}>Sign up</button>
          </div>
          <img src={log} width={100} height={380} className="image" alt="logimage"></img>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illum!</p>
            <button className="btn transparent" id="sign-in-btn"onClick={handlesigninClick}>Sign in</button>
          </div>
          <img src={register} width={100} height={380} className="image" alt="logimage"></img>
        </div>
      </div>
    </div>
   <script src="../Assets/server.js"></script>
</>
  );
};

export default Signup;
