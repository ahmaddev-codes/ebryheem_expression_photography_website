import React, { useEffect } from 'react';
import '../story/Story.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import model1 from '../../assets/portrait3.jpg';
import model2 from '../../assets/portrait4.jpg';
import model3 from '../../assets/ilorin.jpg';
import model4 from '../../assets/ilorin2.jpg';
import model5 from '../../assets/concept2.jpg';
import model6 from '../../assets/concept3.jpg';
import model7 from '../../assets/portrait.jpg';
import model8 from '../../assets/portrait1.jpg';
import model9 from '../../assets/marriage1.jpg';
import model10 from '../../assets/marriage2.jpg';
import model11 from '../../assets/marriage3.jpg';
import model12 from '../../assets/marriage4.jpg';
import StoryBig from '../story/StoryBig';


const Story = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className='story' id='story'>
      {/* Story Intro */}
      <div className="intro">
        <div className="intro__1">
          <div className="intro__text" data-aos="fade-left" data-aos-duration="4000">
            <h1>The Camera lens of <span>EbryheemXpression</span></h1>
            <h3>In Photography, there is a reality so subtle
                that it becomes more real than reality itself;</h3>
          </div>
          
          <img data-aos="fade-right" data-aos-duration="4000" src={model1} alt='model'></img>
        </div>

        <div className="intro__2">
          <h3  data-aos="fade-right" data-aos-duration="4000">
            And if there is one thing every Photography
            must contain, it is the beauty in humanity, 
            despite being flawed, that it captures.</h3>

          <img src={model2} alt='model' data-aos="fade-left" data-aos-duration="4000"></img>
        </div>
      </div>

      {/* story content */}

      <div className="story__content">
        <div>
          <h3 data-aos="fade-up" data-aos-duration="4000">
            From Documenting History and elevating the 
            stand of Culture in the African Continent,
          </h3>

          <div>
            <img src={model3} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
            <img className='drop' src={model4} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
          </div>
        </div>

        <div>
          <h3 data-aos="fade-up" data-aos-duration="4000">
            To celebrating the emergence and 
            conservation of the beauty of Youth,
          </h3>

          <div>
            <img src={model5} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
            <img className='drop' src={model6} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
            <img className='lift' src={model7} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
            <img src={model8} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
          </div>
        </div>
        
        <div>
          <h3 data-aos="fade-up" data-aos-duration="4000">And capturing breathtaking moments of two 
            imperfect souls tying the knot and finding 
            perfection in their imperfects,
          </h3>

          <div>
            <img src={model9} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
            <img className='drop' src={model10} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
            <img className='lift' src={model11} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
            <img src={model12} alt='model' data-aos="fade-up" data-aos-duration="4000"></img>
          </div>
        </div>
        
        <h3 data-aos="fade-up" data-aos-duration="6000">Every moment is worth it, and 
          <span> EbryheemExpression</span> makes it.
        </h3>
      </div>

      <StoryBig />
    </section>
  )
}

export default Story;