import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={tool.image} className="card-img-top" alt={tool.name} />
        <div className="card-body">
          <h5 className="card-title">{tool.name}</h5>
          <p className="card-text">{tool.description}</p>
          <ul className="list-unstyled">
            <li><strong>Location:</strong> {tool.location}</li>
            <li><strong>Price:</strong> {tool.price}</li>
            <li><strong>Capacity:</strong> {tool.capacity}</li>
          </ul>
          <Link to={`/tools/${tool.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
