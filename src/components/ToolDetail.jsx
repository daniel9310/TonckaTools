import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolDetail = () => {
  const { id } = useParams();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    fetch(`/api/tools/${id}`)
      .then(response => response.json())
      .then(data => setTool(data));
  }, [id]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={tool.image} className="img-fluid" alt={tool.name} />
        </div>
        <div className="col-md-6">
          <h1>{tool.name}</h1>
          <p>{tool.description}</p>
          <ul className="list-unstyled">
            <li><strong>Location:</strong> {tool.location}</li>
            <li><strong>Price:</strong> {tool.price}</li>
            <li><strong>Capacity:</strong> {tool.capacity}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
