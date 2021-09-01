import axios from 'axios';
import React, { useState } from 'react';
import Ducks from './Ducks';

const App = () => {
  const [ducks, setDucks] = useState([]);

  const getDucks = async () => {
    try {
      let res = await axios.get("./ducks"); 
      console.log(res);
      setDucks(res.data);
    } catch (error) {
      console.log("error")
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