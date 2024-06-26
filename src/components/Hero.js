import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Hero';
import './Hero.css';



function Hero() {
  return (
    <div className='hero-container'>
      <h1>Want to Buy a House..!</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
        >
            GET STARTED   <i class="fa-solid fa-house"></i>
        </Button>
      
      </div>
    </div>
  )
}

export default Hero;
