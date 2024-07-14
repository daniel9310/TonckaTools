import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';

const ToolList = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/api/tools')
      .then(response => response.json())
      .then(data => setTools(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolList;
