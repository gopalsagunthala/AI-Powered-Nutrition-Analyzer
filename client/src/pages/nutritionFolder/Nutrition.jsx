import React, { useState } from 'react';
import axios from 'axios';
import './Nutrition.css';

const Nutrition = () => {
  const [food, setFood] = useState('');
  const [nutritionData, setNutritionData] = useState([]);

  async function fetchData() {
    const options = {
      method: 'GET',
      url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
      params: {
        query: food
      },
      headers: {
        'X-RapidAPI-Key': '57bdea98c8msh11726cb27834af0p12d8eejsn519597279ab3',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setNutritionData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleFood(e) {
    e.preventDefault();
    fetchData();   
  }

  return (
    <div className='nutrition_analysis'>
      <h1 style={{color:'black'}}>Nutrition Analysis</h1>
      <form onSubmit={handleFood}>
        <label htmlFor="">Enter the Food</label>
        <br /><br />
        <input type="text" value={food} onChange={(e) => setFood(e.target.value)} />
        <button type="submit">Get Nutrition</button>
      </form>
      {nutritionData.length > 0 && (
        <div className="nutrition-info">
          {nutritionData.map((item, index) => (
            <div key={index}>
              <h2>Nutrition Information for {item.name}</h2>
              <ul>
                <li>Serving Size (g): {item.serving_size_g}</li>
                <li>Calories: {item.calories}</li>
                <li>Carbohydrates Total (g): {item.carbohydrates_total_g}</li>
                <li>Cholesterol (mg): {item.cholesterol_mg}</li>
                <li>Fat Saturated (g): {item.fat_saturated_g}</li>
                <li>Fat Total (g): {item.fat_total_g}</li>
                <li>Fiber (g): {item.fiber_g}</li>
                <li>Potassium (mg): {item.potassium_mg}</li>
                <li>Protein (g): {item.protein_g}</li>
                <li>Sodium (mg): {item.sodium_mg}</li>
                <li>Sugar (g): {item.sugar_g}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nutrition;
