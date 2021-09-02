import axios from 'axios';
import React, { useState } from 'react';
import DuckForm from './DuckForm';

const Duck = (props) => {
  const { name, phrase, id, deleteDuck, updateDuck } = props;
  const [showForm, setShowForm] = useState()

  const deleteHandler = async (id) => {
    let res = await axios.delete(`/ducks/${id}`)
    deleteDuck(res.data.id)
  }

  return (
    <div className="duck-container">
      <h1>{name}</h1>
      <p>{`"${phrase}"`}</p>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel Edit" : "Edit"}
      </button>
      {showForm && (
      <DuckForm
        updateDuck={updateDuck}
        id={id}
        name={name}
        phrase={phrase}
        />
      )}
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
};



export default Duck; 