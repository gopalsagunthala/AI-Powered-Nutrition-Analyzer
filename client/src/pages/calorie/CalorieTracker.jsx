import React, { useState } from 'react';
import axios from 'axios';

const CalorieTracker = () => {

    const [gender,setGender]=useState('');
    const [age,setAge]=useState('');
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [duration,setDuration]=useState('');
    const [hrt,setHrt]=useState('');
    const [temp,setTemp]=useState('');

    const [calorie,setCalorie]=useState('');
    const [showCal,setShowCal]=useState(false);
    const [length,setLength]=useState(false);

//   const [formData, setFormData] = useState({
//     gender: '',
//     age: '',
//     height: '',
//     weight: '',
//     duration_of_workout: '',
//     heart_rate: '',
//     body_temperature: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(gender.length>0 && age.length>0 && height.length>0 && weight.length>0 
      && duration.length>0 && hrt.length>0 && temp.length>0)
        setLength(true);
    axios.post('http://localhost:4000/model',{
        gender,age,height,weight,duration,hrt,temp
    } )
    .then((cal)=>{
      setCalorie(cal.data);
        console.log("predicted calorie : ",cal.data)
    })
    .catch((err)=>{
        console.log(err);
    })
  };

  return (
    <div>
      <h1>Calorie Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} required /><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e)=>setAge(e.target.value)} required /><br /><br />

        <label htmlFor="height">Height:</label>
        <input type="number" id="height" name="height" value={height} onChange={(e)=>setHeight(e.target.value)} required /><br /><br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} required /><br /><br />

        <label htmlFor="duration_of_workout">Duration of Workout:</label>
        <input type="number" id="duration_of_workout" name="duration_of_workout" value={duration} onChange={(e)=>setDuration(e.target.value)} required /><br /><br />

        <label htmlFor="heart_rate">Heart Rate:</label>
        <input type="number" id="heart_rate" name="heart_rate" value={hrt} onChange={(e)=>setHrt(e.target.value)} required /><br /><br />

        <label htmlFor="body_temperature">Body Temperature:</label>
        <input type="number" id="body_temperature" name="body_temperature" value={temp} onChange={(e)=>setTemp(e.target.value)} required /><br /><br />

        <button type="submit" onClick={()=>setShowCal(true)} >Submit</button>
      </form>
      <br />
      <div>
        {showCal ? ( length>0 ? (calorie>0?<h3>Predicted Calorie : {calorie}</h3>:"Loading..."):"Please fill out all fields" ):""}
      </div>
    </div>
  );
};

export default CalorieTracker;
