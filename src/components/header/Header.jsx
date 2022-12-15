import React from 'react';
import '../header/Header.css';
import Nav from '../nav/Nav';
import logo from '../../assets/logo.svg';
import {FiFacebook} from 'react-icons/fi';
import {RxTwitterLogo} from 'react-icons/rx';
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
        <a href='https://www.facebook.com/22nnddee?mibextid=LQQJ4d' target='_blank' className="link">
          <FiFacebook />
        </a>

        <a href='https://twitter.com/ebryhheem2nde?s=21&t=Cvp9DZqoY4EFx244QTCnIg' target='_blank' className="link">
          <RxTwitterLogo />
        </a>

        <a href='https://instagram.com/ebryhheemxpression?igshid=YmMyMTA2M2Y=' target='_blank' className="link">
          <FaInstagram />
        </a>

        <a href='https://api.whatsapp.com/send?phone=2347066661465' target='_blank' className="link">
          <FaWhatsapp />
        </a>
      </div>

      <Nav />
    </header>
  )
}

export default Header;