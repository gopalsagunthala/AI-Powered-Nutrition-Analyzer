import React from 'react';
import './Home.css';
import './style.css'
import './mediaqueries.css'
import { FiArrowRightCircle  } from "react-icons/fi";
import Footer from '../../components/footer/Footer.jsx'
import img1 from './images/Food.jpg'
import analyzer from './images/Analyzer.png'
import Dietplan from './images/Dietplan.png'

const Home = () => {

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  return (
  
    <div className='entirepage'>   
      <nav id="desktop-nav">
        <div className="logo">
          <p className="iva">Nutri<span style={{color:"orange"}}>Vision</span></p>
        </div>
        <div>
          <ul className="nav-links">
            <li><a href="#details">About</a></li>
            <li><a href="/signup">SignUp</a></li>
            <li><a href="/signin">SignIn</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">
          <div className="img-container"><img src="./assets/S.jpeg" alt=""/></div>
          <p className="iva">NutriVision</p>
        </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={()=>toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={()=>toggleMenu()}>About</a></li>
            <li><a href="#experience" onClick={()=>toggleMenu()}>Experience</a></li>
            <li><a href="#projects" onClick={()=>toggleMenu()}>Projects</a></li>
            <li><a href="#contact" onClick={()=>toggleMenu()}>Contact</a></li>
          </div>
        </div>
      </nav>
      <div className="outer">
        <div className="left">
        <h1 className="">NutriVision</h1><br />
        <h2 className="">AI Powered Nutrition Analyser.</h2>

        </div>
        <div className="right">
        <button className='start-button'><strong><a href="/signup">Get Start..!</a></strong></button>

            
        </div>
      </div>
      <div className='about' id='details'>
        <div className='about-right'>
          <h3 className='about-content'>"Discover the nutritional content of any food by simply entering its name! Uncover the secrets hidden in your favorite dishes."</h3>
        </div>
        <div className='about-left'>
          <img src={analyzer} alt="profile picture" className='about-image'/>
        </div>
        
      </div>
      <div className='about'>
        <div className='about-right'>
          <img src={Dietplan} alt="profile picture" className='about-image'/>
        </div>
        <div className='about-left'>
          <h3 className='about-content'>"Tailor your path to wellness with our personalized diet planner! Craft a roadmap to your health goals, one meal at a time."</h3>
        </div>
      </div>
      <div className='about'>
        <div className='about-right'>
          <h3 className='about-content'>"Track your journey to better health with our seamless diet tracker. Effortlessly monitor your nutrition and stay on course to your wellness goals."</h3>
        </div>
        <div className='about-left'>
          <img src={analyzer} alt="profile picture" className='about-image'/>
        </div>
      </div>
      <Footer/>
    </div>
  
  );
};

export default Home;
