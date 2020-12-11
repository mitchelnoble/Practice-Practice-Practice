import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import "./PracticeRoutine.css"  
import RoutineCompletion from './RoutineCompletion';

const PracticeRoutine = () => {
  const [completed_monday, setCompletedMonday] = useState(false);
  const [completed_tuesday, setCompletedTuesday] = useState(false);
  const [completed_wednesday, setCompletedWednesday] = useState(false);
  const [completed_thursday, setCompletedThursday] = useState(false);
  const [completed_friday, setCompletedFriday] = useState(false);
  const [completed_saturday, setCompletedSaturday] = useState(false);
  const [completed_sunday, setCompletedSunday] = useState(false);
  const [allCompleted, setAllCompleted] = useState(null);

  let { id } = useParams();
  const [currentRoutine, setCurrentRoutine] = useState({});

  useEffect(() => {
    let getRoutine = async () => {
      let response = await axios.get(`${baseURL}/${id}`, config);
      setCurrentRoutine(response.data);
    }
    getRoutine();
  }, []);

  useEffect(() => {
    if (currentRoutine.fields) {
      setCompletedMonday(currentRoutine.fields.completed_monday)
      setCompletedTuesday(currentRoutine.fields.completed_tuesday)
      setCompletedWednesday(currentRoutine.fields.completed_wednesday)
      setCompletedThursday(currentRoutine.fields.completed_thursday)
      setCompletedFriday(currentRoutine.fields.completed_friday) 
      setCompletedSaturday(currentRoutine.fields.completed_saturday)
      setCompletedSunday(currentRoutine.fields.completed_sunday)
    }
    
  }, [currentRoutine])
  
  useEffect(() => {
    let days = [
      completed_monday,
      completed_tuesday,
      completed_wednesday,
      completed_thursday,
      completed_friday,
      completed_saturday,
      completed_sunday
    ]
    let notCompleted = days.some(day => day === false || day === undefined) 
    console.log(notCompleted)
    console.log(days)
    if (!notCompleted) {
      console.log("here")
      setAllCompleted(true);
    } 
  },[completed_monday,
    completed_tuesday,
    completed_wednesday,
    completed_thursday,
    completed_friday,
    completed_saturday,
    completed_sunday])

  const handleCompletedMonday = async () => {
    let day = "completed_monday";
    let value = !completed_monday;
    let obj = {[day]:value}
    let res = await axios.patch(`${baseURL}/${id}`, { fields: obj }, config)
    console.log(res.data);
    setCompletedMonday(!completed_monday);
  }

  const handleCompletedTuesday = async () => {
    let day = "completed_tuesday";
    let value = !completed_tuesday;
    let obj = {[day]:value}
    let res = await axios.patch(`${baseURL}/${id}`, { fields: obj }, config)
    console.log(res.data);
    setCompletedTuesday(!completed_tuesday);
  }

  const handleCompletedWednesday = async () => {
    let day = "completed_wednesday";
    let value = !completed_wednesday;
    let obj = {[day]:value}
    let res = await axios.patch(`${baseURL}/${id}`, { fields: obj }, config)
    console.log(res.data);
    setCompletedWednesday(!completed_wednesday);
  }

  const handleCompletedThursday = async () => {
    let day = "completed_thursday";
    let value = !completed_thursday;
    let obj = {[day]:value}
    let res = await axios.patch(`${baseURL}/${id}`, { fields: obj }, config)
    console.log(res.data);
    setCompletedThursday(!completed_thursday);
  }

  const handleCompletedFriday = async () => {
    let day = "completed_friday";
    let value = !completed_friday;
    let obj = {[day]:value}
    let res = await axios.patch(`${baseURL}/${id}`, { fields: obj }, config)
    console.log(res.data);
    setCompletedFriday(!completed_friday);
  }
  
  const handleCompletedSaturday = async () => {
    let day = "completed_saturday";
    let value = !completed_saturday;
    let obj = {[day]:value}
    let res = await axios.patch(`${baseURL}/${id}`, { fields: obj }, config)
    console.log(res.data);
    setCompletedSaturday(!completed_saturday);
  }
  
  const handleCompletedSunday = async () => {
    let day = "completed_sunday";
    let value = !completed_sunday;
    let obj = {[day]:value}
    let res = await axios.patch(`${baseURL}/${id}`, { fields: obj }, config)
    console.log(res.data);
    setCompletedSunday(!completed_sunday);
  }

  console.log(allCompleted)
  if (allCompleted) {
    return (<RoutineCompletion />)
  }

  return (
    <div className='routine-container'>
      {currentRoutine.fields && (
        <div>
          <h1 className="topic">You're Practicing: {currentRoutine.fields.topic}</h1>
          <h3>To Get Specific: {currentRoutine.fields.specifics}</h3>
          <h5>{currentRoutine.fields.notes}</h5>
          <h5>You'll be going for {currentRoutine.fields.hours} hour(s)</h5>
          <h5>You've selected these days to practice {currentRoutine.fields.topic} (Check the days you've completed!):</h5>
          {currentRoutine.fields.monday && <div>
            Monday
               <input
              type="checkbox"
              checked={completed_monday}
              onClick={handleCompletedMonday}
            />
          </div>}
          {currentRoutine.fields.tuesday && <div>
            Tuesday
               <input
              type="checkbox"
              checked={completed_tuesday}
              onClick={handleCompletedTuesday}
            />
          </div>}
          {currentRoutine.fields.wednesday && <div>
            Wednesday
               <input
              type="checkbox"
              checked={completed_wednesday}
              onClick={handleCompletedWednesday}
            />
          </div>}
          {currentRoutine.fields.thursday && <div>
            Thursday
               <input
              type="checkbox"
              checked={completed_thursday}
              onClick={handleCompletedThursday}
            />
          </div>}
          {currentRoutine.fields.friday && <div>
            Friday
               <input
              type="checkbox"
              checked={completed_friday}
              onClick={handleCompletedFriday}
            />
          </div>}
          {currentRoutine.fields.saturday && <div>
            Saturday
               <input
              type="checkbox"
              checked={completed_saturday}
              onClick={handleCompletedSaturday}
            />
          </div>}
          {currentRoutine.fields.sunday && <div>
            Sunday
               <input
              type="checkbox"
              checked={completed_sunday}
              onClick={handleCompletedSunday}
            />
          </div>}
          </div>
      )}
    </div>
  );
};

export default PracticeRoutine;