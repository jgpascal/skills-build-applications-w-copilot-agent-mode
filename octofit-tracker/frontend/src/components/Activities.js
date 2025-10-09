import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('API Endpoint:', apiUrl);
        console.log('Fetched Data:', data);
        setActivities(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h3>Activities</h3>
      <ul>
        {activities.map((activity, idx) => (
          <li key={idx}>{activity.name} ({activity.user})</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
