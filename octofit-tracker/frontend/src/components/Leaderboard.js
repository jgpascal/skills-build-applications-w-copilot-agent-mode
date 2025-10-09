import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('API Endpoint:', apiUrl);
        console.log('Fetched Data:', data);
        setLeaderboard(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h3>Leaderboard</h3>
      <ul>
        {leaderboard.map((entry, idx) => (
          <li key={idx}>{entry.user} ({entry.team}): {entry.points} pts</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
