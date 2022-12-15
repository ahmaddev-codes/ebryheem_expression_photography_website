import React from 'react';
import '../story/StoryBig.css';
import model3 from '../../assets/ilorin.jpg';
import model4 from '../../assets/ilorin2.jpg';
import model5 from '../../assets/concept2.jpg';
import model6 from '../../assets/concept3.jpg';
import model7 from '../../assets/portrait.jpg';
import model9 from '../../assets/marriage1.jpg';
import model10 from '../../assets/marriage2.jpg';
import model11 from '../../assets/marriage3.jpg';
import model12 from '../../assets/marriage4.jpg';

const StoryBig = () => {
  return (
    <div className='storyBig'>
      <h4 style={{padding: "0 23rem"}}>From Documenting History and elevating the 
            stand of Culture in the African Continent,
      </h4>

      <div className='storyBig__details'>
        <img src={model3} alt='model'></img>
        <img  style={{marginTop: "3.5rem"}} src={model4} alt='model'></img>
        <img  style={{marginTop: "7rem"}} src={model5} alt='model'></img>

        <div>
          <h4>To celebrating the emergence and 
            conservation of the beauty of Youth,
          </h4>
          <img src={model6} alt='model'></img>
        </div>

        <img  style={{marginTop: "-9rem"}} src={model7} alt='model'></img>

        <div  style={{marginTop: "-5rem"}}>
          <img src={model9} alt='model'></img>
          <h4>And capturing breathtaking moments of two 
            imperfect souls tying the knot and finding 
            perfection in their imperfects,
          </h4>
        </div>

        <img style={{marginTop: "-2rem"}} src={model10} alt='model'></img>
        <img  style={{marginTop: "2rem"}} src={model11} alt='model'></img>
        <img style={{marginTop: "-18.5rem"}} src={model12} alt='model'></img>
      </div>

      <h4 style={{marginLeft: "5rem", marginTop: "-6rem"}}>Every moment is worth it, and 
          <span> EbryheemExpression</span> makes it.
      </h4>
    </div>
  )
}

export default StoryBig