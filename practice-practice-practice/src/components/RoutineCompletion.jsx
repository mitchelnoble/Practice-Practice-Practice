import React, {useEffect,useState} from 'react';
import PracticeRoutine from "./PracticeRoutine";
import { useParams } from "react-router-dom";
import "./RoutineCompletion.css";


const RoutineCompletion = () => {

  return (
    <div className = "prc-text">
      <h1>Yes! You completed this week's practice!</h1>
    </div>
  );
};

export default RoutineCompletion;