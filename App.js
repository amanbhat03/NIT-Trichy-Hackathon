import React, { useState } from 'react';
import './App.css';

const HealthcareAccessPlatform = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleLogin = () => {
    if (username === 'demo' && password === 'password' && securityCode === '1234') {
      if (username === 'doctor') {
        setIsLoggedIn(true);
        setUserRole('doctor');
      } else if (username === 'hospital') {
        setIsLoggedIn(true);
        setUserRole('hospital');
      } else {
        setIsLoggedIn(true);
        setUserRole('patient');
      }
    } else {
      alert('Invalid username, password, or security code');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setUsername('');
    setPassword('');
    setSecurityCode('');
  };

  return (
    <div className="healthcare-access-platform">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Login Page</h2>
          <h3>Welcome to the CareLink, your virtual healthcare platform!</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Security Code"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="dashboard">
          <h2>Welcome to the Healthcare Access Platform</h2>
          <p>User Role: {userRole}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default HealthcareAccessPlatform;
