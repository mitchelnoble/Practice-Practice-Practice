import { Route } from "react-router-dom";
import { useEffect } from "react";
import AddPracticeRoutine from "./components/AddPracticeRoutine";
import Homepage from "./components/Homepage";
import PracticeRoutine from "./components/PracticeRoutine";
import RoutineCompletion from "./components/RoutineCompletion";
import { baseURL, config } from "./services";
import axios from "axios";
import './App.css';

function App() {



  return (
    <div className="App">
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/add-practice-routine">
        <AddPracticeRoutine />
      </Route>
      <Route path="/practiceroutine/:id">
        <PracticeRoutine />
        </Route>
        <Route path="/routine-completion">
          <RoutineCompletion />
        </Route>
      
    </div>
  );
}

export default App;
