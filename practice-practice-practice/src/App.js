import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import AddPracticeRoutine from "./components/AddPracticeRoutine";
import Homepage from "./components/Homepage";
import PracticeRoutine from "./components/PracticeRoutine";
import RoutineCompletion from "./components/RoutineCompletion";
import { baseURL, config } from "./services/index.js";
import axios from "axios";
import './App.css';


function App() {

  const [practiceRoutines, setPracticeRoutines] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    async function getPracticeRoutines() {
      let response = await axios.get(baseURL, config);
      console.log(response.data.records);
      setPracticeRoutines(response.data.records);
    }
    getPracticeRoutines();
  }, [setToggleFetch]);



  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Homepage practiceRoutines={practiceRoutines} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/add-practice-routine">
        <AddPracticeRoutine setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/practiceroutine/:id">
        <PracticeRoutine practiceRoutines={practiceRoutines} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/routine-completion">
          <RoutineCompletion />
        </Route>
      
    </div>
  );
}

export default App;
