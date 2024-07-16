import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Username and password are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            console.log('Login successful:', response.data);
            // Handle successful login (e.g., save token, redirect user)
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="options">
                    <label className="remember-me-label">
                        <input type="checkbox" className="remember-me" name="remember_me" />
                        <span>Remember me</span>
                    </label>
                    <a className="forgot-password" href="#">Forgot password?</a>
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
