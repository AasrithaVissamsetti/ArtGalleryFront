import React from 'react';
import './hero.css'; // Importing CSS for the hero section
import artImage from "../assets/front1.jpeg";  // Going up one level from 'components' to 'assets'


const Hero = () => {
  return (
    <div 
      className="hero" 
      style={{ backgroundImage: `url(${artImage})` }} // Use the imported image
    >
      <div className="hero-content">
        <button className="explore-btn">Explore</button>
      </div>
    </div>
  );
};

export default Hero;
