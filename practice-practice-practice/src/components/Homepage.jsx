import React from 'react';
import { Link } from "react-router-dom";
import PracticeRoutine from './PracticeRoutine';
import Header from './Header'

const Homepage = ({ practiceRoutines }) => {
  console.log(practiceRoutines)
  return (
    <div>
      <Header />
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