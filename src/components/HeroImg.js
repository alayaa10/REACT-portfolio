import './HeroImgStyles.css';

import React from 'react';

import IntroImg from '../assets/introimg.png'

const Heroimg = () => {
  return <div className='hero'>
    <div className = 'mask'>
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className='content'>
        <p>Hello! I'm a FullStack Developer</p>
        <h1>WEB Developer</h1>
        {/* <div>
           <Link to='/Projects' className='btn'>Projects</Link>
           <Link to='/Contact' className='btn-light'>Contact</Link> 
        </div> */}
    </div>
  </div>;
};

export default Heroimg;