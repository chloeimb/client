import React, { useEffect, useState } from 'react';
import Signup from './SignUp';
import Signin from './Signin';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.USER_ID}>{user.EMAIL}</li>)
        ) : (
          <li>No users found</li>
        )}
      </ul>
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
