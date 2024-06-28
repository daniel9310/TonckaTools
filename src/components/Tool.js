// src/components/Tool.js

import React from 'react';

const Tool = ({ name, description, price }) => {
  return (
    <div className="tool">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Tool;
