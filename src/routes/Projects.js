import React from 'react'

import  Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Projects = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading='PROJECTS' text="The latest work i've created!" />
    <Work />
    <Footer />
  </div>;
};

export default Projects;