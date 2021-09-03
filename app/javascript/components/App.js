import React, { useState, useEffect } from 'react';
import Ducks from './Ducks';
import axios from 'axios';
import DuckForm from './DuckForm';

const App = () => {
  const [ducks, setDucks] = useState([]);
  const [showDucks, setShowDucks] = useState(true)


  useEffect(() => {
    getDucks();
  }, []);

  const getDucks = async () => {
    try {
      let res = await axios.get("/ducks"); 
      setDucks(res.data);
    } catch (err) {
      alert("Error!");
    };
  };

  const updateDuck = async (duck) => {
    try {
      let res = await axios.put(`/ducks/${duck.id}`, duck);
      let newDucks = ducks.map((d) => (d.id === duck.id ? res.data : d));
      setDucks(newDucks);
    } catch (err) {
      alert("You must use a name and catchphrase");
    };
  };

  const addDuck = async (duck) => {
    try {
      let res = await axios.post(`/ducks`, duck);
      setDucks([res.data, ...ducks]);
    } catch (err) {
      alert("You must use a name and catchphrase");
    };
  };

  const deleteDuck = (id) => {
    const filteredDucks = ducks.filter((duck) => {
      return duck.id !== id
  })
    setDucks(filteredDucks)
};

  const toggleShowDucks = () => {
    setShowDucks(!showDucks);
  };

  const renderDucks = () => {
    if (showDucks) {
      return (
        <div>
        <Ducks ducks={ducks} deleteDuck={deleteDuck} updateDuck={updateDuck} />
        </div>
      );
    };
  };

  return (
    <div>
      <h1 className="App-header">Thith ith my app!</h1>
      <DuckForm addDuck={addDuck} />
      <button onClick={toggleShowDucks}>
          {showDucks ? "Hide Ducks" : "Get Ducks"} </button>
      {renderDucks()}
   </div>
  );
};

export default App;