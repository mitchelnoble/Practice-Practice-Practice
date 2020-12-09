import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"
import AddPracticeRoutine from "./components/AddPracticeRoutine";
import Homepage from "./components/Homepage";
import PracticeRoutine from "./components/PracticeRoutine";
import RoutineCompletion from "./components/RoutineCompletion";
import { baseURL, config } from "./services/index.js";
import axios from "axios";
import './App.css';


function App() {

  const [practiceRoutine, setPracticeRoutine] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    async function getPracticeRoutines() {
      let response = await axios.get(baseURL, config);
      console.log(response.data.records);
      setPracticeRoutine();
    }
    getPracticeRoutines();
  }, [setToggleFetch]);



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
