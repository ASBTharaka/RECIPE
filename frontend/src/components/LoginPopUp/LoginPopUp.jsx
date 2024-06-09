import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { useEffect } from 'react'
import { StoreContext } from '../../context/storecontex'
import axios from 'axios'


const LoginPopUp = ({ setShowLogin }) => {
  const{url,setToken}= useContext(StoreContext)
  const [currState, setCurrState] = useState("LogIn")
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

      const onChangeHandler=(event)=>{
         const name=event.target.name;
         const value=event.target.value;
         setData(data=>({...data,[name]:value}))
      }

      const inLogin=async(event)=>{
        event.preventDefault();
        let newUrl=url;
        if (currState === "LogIn") {
          newUrl += "/api/user/login";
      } else {
          newUrl += "/api/user/register";
      }
        const response=await axios.post(newUrl,data);
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token);
          setShowLogin(false)
        }
         else{
          alert(response.data.messege)
         }
      }
       
      

  return (
    <div className='login-popup'>
      <form onSubmit={inLogin}className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          {currState === "LogIn" ? null : <input name='name' onChange={onChangeHandler} value={data.name}type="text" placeholder='Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
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
