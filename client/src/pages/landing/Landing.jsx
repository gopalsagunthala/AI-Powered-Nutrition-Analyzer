import React, { useEffect } from 'react'
import Nutrition from './../nutritionFolder/Nutrition';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Landing.css'

const Landing = () => {
  // const navigate = useNavigate()
  // axios.defaults.withCredentials=true;
  // useEffect(()=>{
  //   axios.post("http://localhost:4000/auth/verify")
  //   .then(res=>{
  //     if(!(res.data==="verified"))
  //       navigate('/signin')
  //   })
  // },[navigate])

  return (
    <div class="container">
      <div class="background"></div> 
      <div className='button-cont'>
        <a href="/nutrition"><button className='button-1'>Nutrition Analyser</button></a>
        <br />
        <a href="/dietplanner"><button className='button-2'>Diet Plans</button></a>
        <br />
        <a href="/model"><button className='button-3'>Predict calorie</button></a>
      </div>
    </div>
  )
}

export default Landing
