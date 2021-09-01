import React, { useState } from 'react';
import Duck from "./Duck";

const Ducks = ({ducks}) => {
  
  const renderDucks = () => {
    if (ducks.length == 0) {
      return <h1>No ducks.</h1>
    } // The ... is a quick way to spread out all the duck keys as props
      return ducks.map((duck) => {
      return <Duck key={duck.id} {...duck} />
    })
  }
  return (
    <div>
      <h1>Here are my Dukths!</h1>
      {renderDucks()}
    </div>
  );
};

export default Ducks;