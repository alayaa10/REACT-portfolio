import './AboutContentStyles.css';

import React from 'react';
import {Link} from 'react-router-dom';
import about1 from '../assets/about1.JPG';
import about2 from '../assets/about2.JPG';

const AboutContent = () => {
   return <div className='about'>
    <div className='left'>
        <h1>About who I am?</h1>
        <p>I'm a FullStack developer who just graduated from a bootcamp at UT Austin! I'm looking to make responsive amazing websites for clients!</p>
        <Link to='/contact'>
            <button className='btn'>contact</button>
        </Link>
    </div>

    <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={about1} className='img' alt='about'/>
            </div>
            <div className='img-stack bottom'>
                <img src={about2} className='img' alt='about'/>
            </div>
        </div>
    </div>
   </div>;
};

export default AboutContent;