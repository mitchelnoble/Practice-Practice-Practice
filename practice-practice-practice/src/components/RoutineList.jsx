import React from 'react';
import { Link } from "react-router-dom";
import PracticeRoutine from "./PracticeRoutine";


const RoutineList = ({practiceRoutines}) => {
  return (
    <div className="routine-list">
            {practiceRoutines.map((practiceRoutine) => {
        return (
          <Link className="home-link" key={practiceRoutine.id} to={`/practiceRoutine/${practiceRoutine.id}`}>
            <div className="home-circle">
              <h3>{practiceRoutine.fields.topic}</h3>
              </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RoutineList;