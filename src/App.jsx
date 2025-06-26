import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Project from './Components/Project/Project'
import Education from './Components/Education/Education'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return (
    <>
    <Navbar/>
   
    <Home  id="home"/>
    <About/>
    <Skill/>
    <Project/>
    <Education/>
    <Contact  id="contact"/>
    </>
  )
}

export default App