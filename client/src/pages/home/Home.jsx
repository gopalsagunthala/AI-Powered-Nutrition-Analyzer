import React from 'react';
import './Home.css';
import './style.css'
import './mediaqueries.css'
import { FiArrowRightCircle  } from "react-icons/fi";
import Footer from '../../components/footer/Footer.jsx'
import img1 from './images/Food.jpeg'
import analyzer from './images/Analyzer.png'
import Dietplan from './images/Dietplan.png'
import Tracker from './images/Tracker.png'
import Diet from './images/Diet.png'
import { GoNorthStar } from "react-icons/go";



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
      <div className="outer">
        <div className="left">
            <img src={img1} alt="profile picture" />
            <center>
            
              <div className='more-content'>
              <h4 >Know more about Nutrivision on here...</h4>
              </div>
            </center>
        </div>
        <div className="right">
          <div className='content-home'>
            <h1 className="">NutriVision</h1><br />
            <h2 className="middle-text">AI Powered Nutrition Analyser.</h2><br /><br />
            <button className='start-button'><strong><a href="/signup">Get Start..!</a></strong></button>
            
          </div>
        </div>
      </div>
      <center><h4 className='title-about' id='details'>Nutrition Analysis</h4></center>
      <div className='about1' >
        <div className='about-right1'>
          <div className='about-content1'>
            <h3 >"Discover the nutritional content of any food by simply entering its name! Uncover the secrets hidden in your favorite dishes."
            </h3><br />
            <ul className='analysis-access'>
              <li >What need to access this..!</li><br />
              <li className='acess-1'><GoNorthStar /> Create accout..</li><br />
              <li className='acess-1'><GoNorthStar /> Go to nutrition analysis </li><br />
              <li className='acess-1'><GoNorthStar /> Then enter the food name.</li><br />
            </ul>
          </div>
        </div>
        <div className='about-left1'>
          <img src={analyzer} alt="profile picture" className='about-image'/>
        </div>
        
      </div>
      <center><h4 className='title-about' id='details'>Diet Plan</h4></center>
      <div className='about2'>
        <div className='about-right2'>
          <img src={Dietplan} alt="profile picture" className='about-image'/>
        </div>
        <div className='about-left2'>
          <h3 className='about-content2'>"Tailor your path to wellness with our personalized diet planner! Craft a roadmap to your health goals, one meal at a time."</h3>
        </div>
      </div>
      <center><h4 className='title-about' id='details'>Nutrition Analysis</h4></center>
      <div className='about3'>
        <div className='about-right3'>
          <h3 className='about-content3'>"Track your journey to better health with our seamless diet tracker. Effortlessly monitor your nutrition and stay on course to your wellness goals."</h3>
        </div>
        <div className='about-left3'>
          <img src={Tracker} alt="profile picture" className='about-image' id='track'/>
        </div>
      </div>
      <center><h4 className='title-about' id='details'>Nutrition Articles</h4></center>
      <div className='about4'>
        <div className='about-right4'>
          <img src={Diet} alt="profile picture" className='about-image'/>
        </div>
        <div className='about-left4'>
          <div className='about-content4'>
            <h3 >"Tailor your path to wellness with our personalized diet planner! Craft a roadmap to your health goals, one meal at a time."</h3>
            <br /><br />
            <ul>
              <li><GoNorthStar /> You can read all the article</li>
              <li><GoNorthStar /> Apply those knowledge in your meal and workout session.</li>
            </ul>
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  
  );
};

export default Home;
