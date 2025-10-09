import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('API Endpoint:', apiUrl);
        console.log('Fetched Data:', data);
        setUsers(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
