import React, { useEffect } from 'react'
import Nutrition from './../nutritionFolder/Nutrition';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <a href="/nutrition"><button>Nutrition Analyser</button></a>
      <br />
      <a href="/dietplanner"><button>Diet Plans</button></a>
      <br />
      <a href="/model"><button>Predict calorie</button></a>
    </div>
  )
}

export default Landing
