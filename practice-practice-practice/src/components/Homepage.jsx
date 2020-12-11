import React from 'react';
import { Link } from "react-router-dom";
import PracticeRoutine from './PracticeRoutine';
import Header from './Header';
import RoutineList from './RoutineList';
import "./Homepage.css"

const Homepage = ({ practiceRoutines }) => {
  console.log(practiceRoutines)
  return (
    <div className="home-container">
      {practiceRoutines.map((practiceRoutine) => {
        return (
          <Link className="home-link" key={practiceRoutine.id} to={`/practiceRoutine/${practiceRoutine.id}`}>
            <div className="home-circle">
              <h3 className="home-text">{practiceRoutine.fields.topic}</h3>
            </div>
            <div className="spin-circle"></div>
          </Link>
        );
      })}
    </div>
  );
};

export default Homepage;