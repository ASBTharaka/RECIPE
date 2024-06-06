
import React from 'react';
import './navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
     
    </nav>
  );
};

export default Navbar;
