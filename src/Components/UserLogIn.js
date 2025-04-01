import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/UserLogIn.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here (e.g., API call)
        console.log('Username:', username, 'Password:', password);

        // Example: Navigate to Movies page after successful login
        if (username && password) { // Add your actual login validation logic here
            navigate('/movie'); // Redirect to the Movies page
        }

        // Reset form fields
        setUsername('');
        setPassword('');
    };

    return (
        <form className="StreamList" onSubmit={handleSubmit}>
            <div className="container-flexible">
                <div className="textBox">
                    <label htmlFor="username">Username:<span style={{ color: "red" }}>*</span></label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="textBox">
                    <label htmlFor="password">Password:<span style={{ color: "red" }}>*</span></label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button className="log-in-btn" type="submit">Log in</button>
        </form>
    );
}

export default Login;