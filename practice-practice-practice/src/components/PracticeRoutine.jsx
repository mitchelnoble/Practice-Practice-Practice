import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";


const PracticeRoutine = () => {
  let { id } = useParams();
  const [currentRoutine, setCurrentRoutine] = useState({});

  useEffect(() => {
    let getRoutine = async () => {
      let response = await axios.get(`${baseURL}/${id}`, config);
      setCurrentRoutine(response.data);
    }
    getRoutine();
  }, []);
  
  
  return (
    <div className='routine-container'>
      {currentRoutine.fields && (

      )}
    </div>
  );
};

export default PracticeRoutine;