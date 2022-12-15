import React from 'react';
import { useState } from 'react';
import '../nav/Nav.css';
import {BiHome} from 'react-icons/bi';
import {BsCamera} from 'react-icons/bs';
import {HiOutlineBriefcase} from 'react-icons/hi';
import {BsPerson} from 'react-icons/bs';
import {BsTelephone} from 'react-icons/bs';

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className='nav'>
      <a href='#' onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : ''}>
        <BiHome />
      </a>

      <a href='#story' onClick={() => setActiveNav('#story')} 
      className={activeNav === '#story' ? 'active' : ''} >
        <BsCamera />
      </a>

      <a href='#workfolio'  onClick={() => setActiveNav('#workfolio')} 
      className={activeNav === '#workfolio' ? 'active' : ''}>
        <HiOutlineBriefcase />
      </a>

      <a href='#about'  onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}>
        <BsPerson />
      </a>

      <a href='#contact'  onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}>
        <BsTelephone />
      </a> 
    </nav>
  ) 
}

export default Nav;