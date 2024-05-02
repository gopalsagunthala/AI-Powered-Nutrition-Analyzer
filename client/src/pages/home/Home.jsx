import React from 'react';
import './Home.css';
import { FiArrowRightCircle  } from "react-icons/fi";
// import { FaBeer } from 'react-icons/fa';

const Home = () => {
  return (
  
    <div> 
      <div className='img'></div>
      <div className='content'>
        <div className='navbar'>
          <div className="left">
            <p>LOGO</p>
          </div>
          <div className="right">
            <a href="#" className='NagAnchor'>About</a>
            <a href="/signup" className='NagAnchor'>Sign Up</a>
            <a href="/signin" className='NagAnchor'>Sign In</a>
          </div>
        </div>
        <div className='body'>
          <div className='text'>
            <strong> <span className='doublequotes'>"</span> Transform your life through the power of<span > wellness</span> <span className='doublequotes'>"</span></strong>
          </div>
          <div >
            <a href="/signup"><button className='StartButton'><strong>Get Start <FiArrowRightCircle /></strong></button></a>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Home;
