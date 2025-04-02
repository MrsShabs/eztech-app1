import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  GitHubLoginButton  from 'react-login-github'; 
import '../css/UserLogIn.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login verification
        if (username === 'user' && password === 'password') {
            onLogin();
            navigate('/'); // Redirect to main application
        } else {
            alert('Invalid credentials');
        }
    };

    // function to login user to StreamList
    const handleGitHubLoginSuccess = (response) => {
        console.log('GitHub Login Success:', response);
        localStorage.setItem('isLoggedIn', true);
        navigate('/movie'); // Redirect to main application
    };

    const handleGitHubLoginFailure = (error) => {
        console.error('GitHub Login Failed:', error);
        alert('GitHub login failed. Please try again.');
    };

    return (
        <>
            <h2 className="user-login-title"> User Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="contairer-flexible-login">
                    <div className="textbox-flexible">
                    <label htmlFor="username">Username:<span style={{ color: "red" }}>*</span></label>
                        <input
                            className="user-login-input"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="textbox-flexible">
                    <label htmlFor="password">Password:<span style={{ color: "red" }}>*</span></label>
                        <input
                            className="user-login-input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
            </form>
            <div className="oauth-login">
                <GitHubLoginButton
                    className="github-login-button"
                    clientId="Ov23liLDl2KIZYefq5dU" // Updated placeholder for clientId
                    onSuccess={handleGitHubLoginSuccess}
                    onFailure={handleGitHubLoginFailure}
                />
            </div>
        </>
    );
};

export default Login;
