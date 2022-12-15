import React, {useEffect, useRef} from 'react';
import '../contact/Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import {MdOutlineMail} from 'react-icons/md';
import {RxTwitterLogo} from 'react-icons/rx';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uvj0l4r', 'template_ky16upu', form.current, 't-CBVvJCg7bVtUhxo')

    e.target.reset()
  };

  return (
    <section className='contact' id='contact'>
      <div data-aos="fade-up" data-aos-duration="4000" className="contact__header">
        <h2>BOOK AN APPOINTMENT</h2>
        <h3>Reach out to Us</h3>
      </div>

      <div className='contact__details'>
        <div className='socials'>
          <a data-aos="fade-right" data-aos-duration="4000" href='https://api.whatsapp.com/send?phone=2347066661465' target='_blank' className="link">
            <FaWhatsapp />
            <p>Whatsapp</p>
          </a>

          <a data-aos="fade-right" data-aos-duration="4000" href='https://twitter.com/ebryhheem2nde?s=21&t=Cvp9DZqoY4EFx244QTCnIg' target='_blank' className="link">
            <RxTwitterLogo />
            <p>Twitter</p>
          </a>

          <a data-aos="fade-right" data-aos-duration="4000" href='https://instagram.com/ebryhheemxpression?igshid=YmMyMTA2M2Y=' target='_blank' className="link">
            <FaInstagram />
            <p>Instagram</p>
          </a>

          <a data-aos="fade-right" data-aos-duration="4000" href='mailto: ibrahimibrahim.2nde@gmail.com' target='_blank' className="link">
            <MdOutlineMail />
            <p>Email</p>
          </a>
        </div>

        <div className="form">
          <h3>Send a Direct Message</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input name='name' type='text' placeholder='Full Name' required></input>
            <input name='email' type='email' placeholder='Email' required></input>
            <input name='tel' type='tel' placeholder='Phone Number'></input>
            <textarea name='message' type='textarea' placeholder='Enter text here' 
            cols={'7'} rows={'4'} required></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;