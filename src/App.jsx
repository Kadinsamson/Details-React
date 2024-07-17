import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <img src="https://img.icons8.com/ios-filled/50/000000/visible.png" alt="Eye Icon"/>
        </div>
        <h2>Name: Kadin Samson L</h2>
        <p>Registration No: 212221230044</p>
        <button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            <p>Age: 20</p>
            <p>Department: Artificial Intelligence and Data Science</p>
            <p>Address: Chennai </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;