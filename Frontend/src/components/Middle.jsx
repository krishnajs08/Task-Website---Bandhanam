import React from 'react'
import './middle.css'
import image1 from '../assets/webimage1.jpg'
import image2 from '../assets/webimage2.jpg'
import image3 from '../assets/webimage3.jpg'
import image4 from '../assets/webimage4.jpg'
const Middle = () => {
  return (
    <div className='middleContainer'>
    <div className='middle'>
      <div className='heading'>
        <h2 id='start'>
            Stories of Love and Togetherness!
        </h2>
      </div>
        <br />
        <div className='galary'>
            <div className='rightbox'>
               <img src={image1} alt="" />
               <h4>Rahul & Priya</h4>
            </div>

            <div>
              <div className='rightbox'>
               <img src={image2} alt="" />
               <h4>Amit & Neha</h4>
            </div>

            </div>
              <div className='rightbox'>
               <img src={image3} alt="" />
               <h4>Siddharth & Riya</h4>
             </div>

            <div className='rightbox'>
               <img src={image4} alt="" />
               <h4>Varun & Meera</h4>
              
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Middle