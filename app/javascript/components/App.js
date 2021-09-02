import React, { useState } from 'react';
import Ducks from './Ducks';
import axios from 'axios';
import DuckForm from './DuckForm';



const App = () => {
  const [ducks, setDucks] = useState([]);

  const getDucks = async () => {
    try {
      let res = await axios.get("/ducks"); 
      setDucks(res.data);
    } catch (err) {
      alert("Error!")
    };
  };


  const addDuck = (duck) => {
    setDucks([duck, ...ducks]);
  };

  //returning everything in a new array where id doesn't match this one. setDucks to that new array
  const deleteDuck = (id) => {
    const filteredDucks = ducks.filter((duck) => {
      return duck.id !== id
  })
    setDucks(filteredDucks)
};


  return (
    <div>
      <h1 className="App-header">Thith ith my app!</h1>
      <button onClick={getDucks}>Get Ducks</button>
      <DuckForm addDuck={addDuck} />
      <Ducks ducks={ducks} deleteDuck={deleteDuck} />
    </div>
  );
};

export default App;