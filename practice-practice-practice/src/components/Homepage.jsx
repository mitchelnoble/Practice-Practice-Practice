import React from 'react';
import { Link } from "react-router-dom";
import PracticeRoutine from './PracticeRoutine';

const Homepage = ({ practiceRoutines }) => {
  console.log(practiceRoutines)
  return (
    <div>
      <h1>Practice Practice Practice</h1>
      {practiceRoutines.map((practiceRoutine) => {
        return (
          <Link key={practiceRoutine.id} to={`/practiceRoutine/${practiceRoutine.id}`}>
            <h3>{practiceRoutine.fields.topic}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Homepage;