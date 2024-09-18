import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here (e.g., validation, API call)
        console.log('Logging in...');
        window.location.href = "/main"; // Redirect to the main page
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="src/assets/logo.png" alt="Logo" className="logo" />
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <span className="icon"><i className="fas fa-user"></i></span>
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-group">
                        <span className="icon"><i className="fas fa-lock"></i></span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                        />
                        <span className="icon toggle-password" onClick={handlePasswordVisibility}>
                            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                        </span>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
