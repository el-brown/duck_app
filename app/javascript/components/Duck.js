import axios from 'axios';
import React, { useState } from 'react';

const Duck = (props) => {
  const { name, phrase, id, deleteDuck } = props;

  const deleteHandler = async (id) => {
    let res = await axios.delete(`/ducks/${id}`)
    deleteDuck(res.data.id)
  }

  return (
    <div className="duck-container">
      <h1>{name}</h1>
      <p>{phrase}</p>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
};



export default Duck; 