import React, { useState } from 'react';
import Ducks from './Ducks';
import axios from 'axios';

const App = () => {
  const [ducks, setDucks] = useState([]);

  const getDucks = async () => {
    try {
      let res = await axios.get("/ducks"); 
      setDucks(res.data);

    } catch (err) {
      alert("Error!")
    }
  }
  return (
    <div>
      <h1>Thith ith my app!</h1>
      <button onClick={getDucks}>Get Ducks</button>
      <Ducks ducks={ducks} />
    </div>
  );
};

export default App;