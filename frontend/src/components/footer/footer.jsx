import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
          <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil molestiae, maxime culpa vero totam fugiat rerum distinctio, voluptas eveniet, maiores itaque tenetur dolore delectus hic magni dolores sapiente laborum.</p>
            <div className="footer-social-icon">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>



          <div className='footer-content-right'>
                    <h2>COMPANY</h2>
                    <ul>
                      <li>Home</li>
                      <li>About As</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                    </ul>
          </div>


          <div className='footer-content-center'>
             <h2>GET IN TOUCH</h2>
             <ul>
              <li>011-1234567</li>
              <li>tharakarathnayaka@gmail.com</li>
             </ul>
          </div>
         </div>
         <hr/>
         <p className="footer-copy-right">
         
           Copyright 2024 @ Tomato.Com-All Right Reserved
               
         </p>
    </div>
  )
}

export default Footer