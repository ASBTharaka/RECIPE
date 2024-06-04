import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("LogIn")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          {currState === "LogIn" ? null : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the Privacy Policy</p>
        </div>
        {currState === "LogIn" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("LogIn")}>Log In</span></p>
        )}
      </form>
    </div>
  )
}

export default LoginPopUp
