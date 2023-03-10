import React, { useState, useEffect } from "react";
import Exercises from "./Exercises";
import BreakfastMeals from "./BreakfastMeals";
import Meditation from "./Meditation";

const Morning = () => {

  const [showExercise, setShowExercise] = useState(false)
  const [showBreakfast, setShowBreakfast] = useState(false)
  const [showMeditation, setShowMeditation] = useState(false)

  const showExerciseComponent = () => {
    setShowExercise(!showExercise)
  }
  
  const showBreakfastComponent = () => {
    setShowBreakfast(!showBreakfast)
  }

  const showMeditationComponent = () => {
    setShowMeditation(!showMeditation)
  }

  return (
    <div>
      <h1>Good Morning!</h1> 
      <div onClick={showExerciseComponent}>
        <h2>Movement</h2>
        </div>
        {showExercise && <Exercises />}

      <div onClick={showBreakfastComponent}>
        <h2>Breakfast Ideas</h2>
      </div>
      {showBreakfast && <BreakfastMeals />}

      <div onClick={showMeditationComponent}>
        <h2>Medidate</h2>
      </div>
      {showMeditation && <Meditation />}

      <h4>What time do you start work?</h4>
    </div>
  )
}

export default Morning; 