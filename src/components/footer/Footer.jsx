import React from 'react';
import '../footer/Footer.css';
import img from '../../assets/scroll to top dotted.svg';
import {MdOutlineMail} from 'react-icons/md';
import {RxTwitterLogo} from 'react-icons/rx';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer padding'>
      <div className="footer__socials">
        <a href='https://api.whatsapp.com/send?phone=2347066661465' target='_blank' className="link">
          <FaWhatsapp />
        </a>

        <a href='https://twitter.com/ebryhheem2nde?s=21&t=Cvp9DZqoY4EFx244QTCnIg' target='_blank' className="link">
          <RxTwitterLogo />
        </a>

        <a href='https://instagram.com/ebryhheemxpression?igshid=YmMyMTA2M2Y=' target='_blank' className="link">
          <FaInstagram />
        </a>

        <a href='mailto: ibrahimibrahim.2nde@gmail.com' target='_blank' className="link">
          <MdOutlineMail />
        </a>
      </div>

      <a href='#'>
        <img src={img} alt='scroll to top'></img>
      </a>

      <p>copyright © <span>EbryheemXpression</span>, 2022</p>
    </section>
  )
}

export default Footer;