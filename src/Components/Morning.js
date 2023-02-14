import React, { useState, useEffect } from "react";
import Exercises from "./Exercises";
import BreakfastMeals from "./BreakfastMeals";
import Meditation from "./Meditation";

const Morning = () => {

  const [showExercise, setShowExercise] = useState(false)
  const [showBreakfast, setShowBreakfast] = useState(false)
  const [showMeditation, setShowMeditation] = useState(false)

  const showExercises = () => {
    setShowExercise(!showExercise)
    console.log(showExercise)
  }
  
  

  return (
    <div>
      <h1>Good Morning!</h1> 
      <div onClick={showExercises}>
        <h2>Movement</h2>
        {showExercise && <Exercises />}
      </div>

      <h2>Breakfast Ideas</h2>
      <BreakfastMeals />

      <h2>Medidate</h2>
      <Meditation />

      <h4>What time do you start work?</h4>
    </div>
  )
}

export default Morning; 