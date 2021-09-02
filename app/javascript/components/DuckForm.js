import axios from 'axios';
import React, { useState } from 'react';

const DuckForm = (props) => {
  const { addDuck } = props
  const [name, setName] = useState(props.name ? props.name : '')
  const [phrase, setPhrase] = useState(props.phrase ? props.phrase : '')
  const [form, setForm] = useState()

  // e stands for event. The event of the submit. preventDefault keeps the page from
  //refreshing. The axios call sends the info to the back end. addDuck(res.data)
  //creates a new setDucks state by running the info through addDuck on the apps page
  //I had to pass addDuck down as props to have access to it and to setDucks.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formObj = {name, phrase}
    let res = await axios.post('/ducks', formObj);
    addDuck(res.data)
    setName("")
    setPhrase("");
  };

  return (
    <div className="form">
      <h2>{props.id ? "Fix this" : "Gimme a"} Duck!</h2>
    <form className="duck-form" onSubmit={handleSubmit}>
      <p>Duck's Name</p>
      <input 
        value={name} 
        onChange={(e) => {
          setName(e.target.value);
        }}
        />
      <p>Catchphrase</p>
      <input 
        value={phrase} 
        onChange={(e) => {
          setPhrase(e.target.value);
        }}
        />
      <button type="submit">{props.id ? "Update" : "Add"}</button>
    </form>
    </div>
  );

};

export default DuckForm