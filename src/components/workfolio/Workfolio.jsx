import React, { useEffect } from 'react';
import '../workfolio/Workfolio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {IoIosVideocam} from 'react-icons/io';
import img from '../../assets/lens3.jpg';

const Workfolio = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section id='workfolio' className='workfolio'>
      <div className="workfolio__header">
        <h2 data-aos="fade-up" data-aos-duration="4000">Our Services</h2>
        <p data-aos="fade-up" data-aos-duration="4000">What we do</p>
      </div>

      <div className="workfolio__details">
        <img src={img} alt='image'></img>
        <div className="text">
          <ul>
            <li data-aos="fade-left" data-aos-duration="4000"><IoIosVideocam/>Wedding Photograph suite</li>
            <li data-aos="fade-left" data-aos-duration="4000"><IoIosVideocam/>Biography catalogue</li>
            <li data-aos="fade-left" data-aos-duration="4000"><IoIosVideocam/>Portrait / photoshoot sessions</li>
            <li data-aos="fade-left" data-aos-duration="4000"><IoIosVideocam/>Studio sessions</li>
            <li data-aos="fade-left" data-aos-duration="4000"><IoIosVideocam/>Outdoor / lifestyle photographs</li>
            <li data-aos="fade-left" data-aos-duration="4000"><IoIosVideocam />Photographic documentation</li>
          </ul>

          <button data-aos="fade-up" data-aos-duration="4000">
            View Catalogue
          </button>
        </div>
      </div>
    </section>
  )
}

export default Workfolio;