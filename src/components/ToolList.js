// src/components/ToolList.js

import React from 'react';
import Tool from './Tool';

const tools = [
  { name: 'Hammer', description: 'A basic hammer.', price: 10 },
  { name: 'Screwdriver', description: 'A basic screwdriver.', price: 5 },
  { name: 'Drill', description: 'A powerful drill.', price: 50 }
];

const ToolList = () => {
  return (
    <div className="tool-list">
      {tools.map((tool, index) => (
        <Tool key={index} {...tool} />
      ))}
    </div>
  );
};

export default ToolList;
