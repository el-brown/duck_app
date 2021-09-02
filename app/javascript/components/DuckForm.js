import React, { useState } from 'react';

const DuckForm = (props) => {
  const { addDuck , updateDuck, id } = props

  const [duckName, setDuckName] = useState(props.name ? props.name : '')
  const [duckPhrase, setDuckPhrase] = useState(props.phrase ? props.phrase : '')

  const handleSubmit = (e) => {
      e.preventDefault();
        if (props.id) {
          updateDuck({ id:id, name:duckName, phrase:duckPhrase});
        } else {
          addDuck({ id:Math.random(), name:duckName, phrase:duckPhrase});
        }
        setDuckName("")
        setDuckPhrase("");
    };

  return (
    <div className="form">
      <h2>{props.id ? "Fix this" : "Gimme a"} Duck!</h2>
    <form className="duck-form" onSubmit={handleSubmit}>
      <p>Duck's Name</p>
      <input 
        value={duckName} 
        onChange={(e) => {
          setDuckName(e.target.value);
        }}
        />
      <p>Catchphrase</p>
      <input 
        value={duckPhrase} 
        onChange={(e) => {
          setDuckPhrase(e.target.value);
        }}
        />
      <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );

};

export default DuckForm;