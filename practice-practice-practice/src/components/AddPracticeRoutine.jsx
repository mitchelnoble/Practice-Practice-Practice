import axios from "axios";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
import Header from "./Header";
import "./AddPracticeRoutine.css";

const AddPracticeRoutine = (props) => {

  const [topic, setTopic] = useState("");
  const [specifics, setSpecifics] = useState("");
  const [notes, setNotes] = useState("");
  const [frequency, setFrequency] = useState("");
  const [hours, setHours] = useState("");
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      topic,
      specifics,
      notes,
      frequency,
      hours,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    };

    await axios.post(baseURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);
    history.push("/");

  }

  return (
    <div className="add-practice-container">
      <div className="form-container"> 
      <h2 className="form-title">Let's Practice:</h2>
      <form className = "pr-form" onSubmit={handleSubmit}>
        <label htmlFor='topic'>So, what is your practice topic?:</label>
        <br></br>
        <input
          type='text'
          name='topic'
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        /><br></br><br/>
        <label htmlFor='specifics'>Get specific! What parts of your topic are you practicing?:</label>
        <br></br>
        <input
          type='text'
          name='specifics'
          value={specifics}
          onChange={(e) => {
            setSpecifics(e.target.value);
          }}
          /><br></br><br/>
        <label htmlFor='notes'>Any notes you'd like to write out?</label>
        <br></br>
        <input
          type='text'
          name='notes'
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          /><br></br><br/>
        <label htmlFor='frequency'>How many times a day?: </label>
        <br></br>
        <input
          type='number'
          name='frequency'
          value={frequency}
          onChange={(e) => {
            setFrequency(e.target.value);
          }}
          /><br></br><br/>
        <label htmlFor='hours'>How many hours a day?: </label>
        <br/>
        <input
          type='number'
          name='hours'
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
          }}
          /><br></br><br/> What Days?:<br></br><br />
        <label htmlFor='monday'>Monday</label>
        <input
          type='checkbox'
          name='monday'
          value={monday}
          onChange={(e) => {
            setMonday(!monday);
          }}
          />
        <label htmlFor='tuesday'>Tuesday</label>
        <input
          type='checkbox'
          name='tuesday'
          value={tuesday}
          onChange={(e) => {
            setTuesday(!tuesday);
          }}
          />
        <label htmlFor='wednesday'>Wednesday</label>
        <input
          type='checkbox'
          name='wednesday'
          value={wednesday}
          onChange={(e) => {
            setWednesday(!wednesday);
          }}
          />
        <label htmlFor='thursday'>Thursday</label>
        <input
          type='checkbox'
          name='thursday'
          value={thursday}
          onChange={(e) => {
            setThursday(!thursday);
          }}
          />
        <label htmlFor='friday'>Friday</label>
        <input
          type='checkbox'
          name='friday'
          value={friday}
          onChange={(e) => {
            setFriday(!friday);
          }}
          />
        <label htmlFor='saturday'>Saturday</label>
        <input
          type='checkbox'
          name='saturday'
          value={saturday}
          onChange={(e) => {
            setSaturday(!saturday);
          }}
          />
        <label htmlFor='sunday'>Sunday</label>
        <input
          type='checkbox'
          name='sunday'
          value={sunday}
          onChange={(e) => {
            setSunday(!sunday);
          }}
        /> <br/> <br/>
        <input className="pr-button" type = 'submit' />
      </form>
      </div>
    </div>
  );
};

export default AddPracticeRoutine;