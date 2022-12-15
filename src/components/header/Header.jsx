import React from 'react';
import '../header/Header.css';
import Nav from '../nav/Nav';
import logo from '../../assets/logo.svg';
import {BsFacebook} from 'react-icons/bs';
import {SiTwitter} from 'react-icons/si';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';

const Header = () => {
  return (
    <header id='#' className='header padding'>
      <img src={logo} alt='logo'></img>

      <div className='header__text'>
        <h1>“The Aim of <span>Photography</span> is to represent not the Outward appearance of things,
          but their Inward <span>Significance”</span>
        </h1>

        <p>-- Aristotle</p>
      </div>

      <div className="header__social">
        <BsFacebook />
        <SiTwitter />
        <FaInstagram />
        <FaWhatsapp />
      </div>

      <Nav />
    </header>
  )
}

export default Header;