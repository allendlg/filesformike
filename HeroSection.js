import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import MfDoom from './video/mfDoom1.mp4';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted >
      <source src={MfDoom} type ="video/mp4"/>
      </video>
      <h1>A&M's Album Guide</h1>
      <p>Les gooooooo</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Recent Review
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;