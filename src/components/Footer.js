import './FooterStyles.css'

import React from 'react'

import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
         <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <div>
                    <p>Tomball</p>
                    <p>Texas</p>
                </div>
         </div>
         <div className='phone'>
         <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
         (817)808-1725</h4>
         </div>
         <div className='email'>
          <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}} />
          alayaguxj@gmail.com</h4>
         </div>
         </div>

         <div className='right'>
          <h4>About Me</h4>
          <p>Hello, My name is Alaya Guajardo. I'm a fullstack developer here in Texas.
            I'm currently working on finishing my bootcamp at UT Austin! I can't wait to break into the tech world
            and show off my developer skills!</p>
            <div className='social'>
              <FaFacebook
              size={30} style= {{ color: "#fff", marginRight: "1rem" }} />
              <FaLinkedin
              size={30} style= {{ color: "#fff", marginRight: "1rem" }} />
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer