import React, { useState } from 'react';

const Duck = (props) => {
  const { name, phrase } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>{phrase}</p>
    </div>
  );
};

export default Duck; 