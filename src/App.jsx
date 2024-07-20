import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male'); // Default to male
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    if (height > 0 && weight > 0 && age > 0) {
      const heightMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
      setBMI(bmiValue);

      // Calculate BMI category based on gender
      if (gender === 'male') {
        categorizeBMIMale(bmiValue);
      } else if (gender === 'female') {
        categorizeBMIFemale(bmiValue);
      }
    }
  };

  const categorizeBMIMale = (bmi) => {
    if (bmi < 18.5) {
      setBMICategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBMICategory('Normal Weight');
    } else if (bmi >= 24.9 && bmi < 29.9) {
      setBMICategory('Overweight');
    } else {
      setBMICategory('Obese');
    }
  };

  const categorizeBMIFemale = (bmi) => {
    if (bmi < 18.5) {
      setBMICategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBMICategory('Normal Weight');
    } else if (bmi >= 24.9 && bmi < 29.9) {
      setBMICategory('Overweight');
    } else {
      setBMICategory('Obese');
    }
  };

  return (
    <div className="App">
      <div className="background">
        <div className="overlay">
          <h1 className='mb-5'>BMI Calculator</h1>
          <div>
            <label className='mb-4'>Height (cm):</label>
            <input
              type="number" className='rounded-3'
              value={height}
              onChange={(e) => setHeight(e.target.value) }
            />
          </div>
          <div>
            <label className='mb-4'>Weight (kg):</label>
            <input
              type="number"className='rounded-3'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className='mb-4'>Age:</label>
            <input
              type="number"className='rounded-3'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className='mb-4'>Gender:</label>
            <select
              value={gender}className='rounded-3'
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button  className='mb-5 rounded-3 p-3'
          onClick={calculateBMI}>Calculate BMI</button>
          {bmi && <h2 className='fs-2'>Your BMI: {bmi}</h2>}
          {bmiCategory && <h3 className='fs-1'
          >Category: {bmiCategory}</h3>}
        </div>
      </div>
    </div>
  );
}

export default App;
