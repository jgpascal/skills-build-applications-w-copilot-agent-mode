import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('API Endpoint:', apiUrl);
        console.log('Fetched Data:', data);
        setWorkouts(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h3>Workouts</h3>
      <ul>
        {workouts.map((workout, idx) => (
          <li key={idx}>{workout.name} ({workout.user})</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
