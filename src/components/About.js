import React from 'react';
import photo from '../assets/photo.jpeg';

function About() {
  return (
    <div className="about">
      <div>
        <img src={photo} alt="Terry" />
      </div>
      <div className="about-text">
        <p>Welcome!</p>
        <p>
          My name is Terry and I am a Full Stack developer with a background in art and design. I previously had a career as a 3D animator and video producer on various projects. Throughout the years, I discovered that I really enjoyed solving technical problems and learning how things worked.
        </p>
        <p>
          At the beginning of last year, I decided to take the step of changing my career. I enrolled in Rithm School and for 4 months, I worked hard to become a confident Full Stack developer. Now I am looking for opportunities to collaborate with others and build great things.
        </p>
      </div>
    </div>
  )
}

export default About;