import React from 'react';
import '../workfolio/Workfolio.css';
import {IoIosVideocam} from 'react-icons/io';
import img from '../../assets/lens3.jpg';

const Workfolio = () => {
  return (
    <section id='workfolio' className='workfolio'>
      <div className="workfolio__header">
        <h2>Our Services</h2>
        <p>What we do</p>
      </div>

      <div className="workfolio__details">
        <img src={img} alt='image'></img>
        <div className="text">
          <ul>
            <li><IoIosVideocam/>Wedding Photograph suite</li>
            <li><IoIosVideocam/>Biography catalogue</li>
            <li><IoIosVideocam/>Portrait / photoshoot sessions</li>
            <li><IoIosVideocam/>Studio sessions</li>
            <li><IoIosVideocam/>Outdoor / lifestyle photogrphs</li>
            <li><IoIosVideocam />Photographic documentation</li>
          </ul>

          <button>
            View Catalogue
          </button>
        </div>
      </div>
    </section>
  )
}

export default Workfolio;