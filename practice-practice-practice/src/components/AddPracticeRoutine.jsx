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
    </div>
  );
};

export default AddPracticeRoutine;