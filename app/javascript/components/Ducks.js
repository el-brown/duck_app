import React, { useState } from 'react';
import Duck from "./Duck";

const Ducks = ({ducks, deleteDuck}) => {
  
  const renderDucks = () => {
    if (ducks.length == 0) {
      return <h1>No ducks.</h1>
    } 
      return ducks.map((duck) => {
      return <Duck key={duck.id} deleteDuck={deleteDuck} {...duck}/>;
    });
  };
  
  return (
    <div>
      <h1>Here are my Dukths!</h1>
      {renderDucks()}
    </div>
  );
};

export default Ducks;