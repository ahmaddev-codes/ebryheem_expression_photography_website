import React, {useEffect} from 'react';
import '../about/About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/photographer.png';

const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className='about' id='about'>
      <h3 data-aos="fade-right" data-aos-duration="4000">
        “Based in the Heart of Ilorin, Nigeria, 
        we strive not only to bring smile to faces 
        and make special moments, SPECIAL, but also 
        capture fleeting moments, and help you live 
        them forever“
      </h3>

      <h1>EbryheemXpression</h1>

      <img src={img} alt='photographer'></img>
    </section>
  )
}

export default About;