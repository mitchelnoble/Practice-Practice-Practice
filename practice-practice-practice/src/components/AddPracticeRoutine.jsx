import axios from "axios";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";

const AddPracticeRoutine = (props) => {

  const [topic, setTopic] = useState("");
  const [specifics, setSpecifics] = useState("");
  const [notes, setNotes] = useState("");
  const [daily, setDaily] = useState("");
  const [frequency, setFrequency] = useState("");
  const [hours, setHours] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");
  const [sunday, setSunday] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      topic,
      specifics,
      notes,
      daily,
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='topic'>So, what is your practice topic?:</label>
        <input
          type='text'
          name='topic'
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />
        <label htmlFor='specifics'>Get specific! What parts of your topic are you practicing?:</label>
        <input
          type='text'
          name='specifics'
          value={specifics}
          onChange={(e) => {
            setSpecifics(e.target.value);
          }}
          />
        <label htmlFor='notes'>Any notes you'd like to write out?</label>
        <input
          type='text'
          name='notes'
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          />
        <label htmlFor='daily'>Are you praciticing this topic everyday? (Yes/No): </label>
        <input
          type='text'
          name='daily'
          value={daily}
          onChange={(e) => {
            setDaily(e.target.value);
          }}
          />
        <label htmlFor='frequency'>How many times a day?: </label>
        <input
          type='number'
          name='frequency'
          value={frequency}
          onChange={(e) => {
            setFrequency(e.target.value);
          }}
          />
        <label htmlFor='hours'>How many hours a day?: </label>
        <input
          type='number'
          name='hours'
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
          }}
          />
        <label htmlFor='monday'></label>
        <input
          type='text'
          name=''
          value=''
          onChange={(e) => {
            set(e.target.value);
          }}
          />
        <label htmlFor=''></label>
        <input
          type=''
          name=''
          value=''
          onChange={(e) => {
            set(e.target.value);
          }}
          />
        <label htmlFor=''></label>
        <input
          type=''
          name=''
          value=''
          onChange={(e) => {
            set(e.target.value);
          }}
          />
        <label htmlFor=''></label>
        <input
          type=''
          name=''
          value=''
          onChange={(e) => {
            set(e.target.value);
          }}
          />
        <label htmlFor=''></label>
        <input
          type=''
          name=''
          value=''
          onChange={(e) => {
            set(e.target.value);
          }}
          />
        <label htmlFor=''></label>
        <input
          type=''
          name=''
          value=''
          onChange={(e) => {
            set(e.target.value);
          }}
          />
      </form>
    </div>
  );
};

export default AddPracticeRoutine;