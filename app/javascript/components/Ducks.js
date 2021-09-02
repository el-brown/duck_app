import React, { useState } from 'react';
import Duck from "./Duck";

const Ducks = ({ducks, deleteDuck}) => {
  
  const renderDucks = () => {
    if (ducks.length == 0) {
      return <h3>No ducks.</h3>
    } 
      return ducks.map((duck) => {
      return <Duck key={duck.id} deleteDuck={deleteDuck} {...duck}/>;
    });
  };
  
  return (
    <div className="myDucks">
      <h2>Here are my Dukths!</h2>
      {renderDucks()}
    </div>
  );
};

export default Ducks;