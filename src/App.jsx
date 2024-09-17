import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  if (isLoggedIn) {
    // Render the HomeScreen if logged in
    return <HomeScreen username={username} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the login logic
    setIsLoggedIn(true); // Set login status to true after successful login
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );

}

// New HomeScreen component
function HomeScreen({ username }) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      {/* Add your home screen content here */}
    </div>
  );
}

export default App
