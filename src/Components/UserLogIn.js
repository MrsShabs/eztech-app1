import React from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubLoginButton from 'react-login-github';
import '../css/UserLogIn.css';

const Login = () => {

    // function to login user to StreamList
    const handleGitHubLoginSuccess = (response) => {
        console.log('GitHub Login Success:', response);
        localStorage.setItem('isLoggedIn', true);
    };

    const handleGitHubLoginFailure = (error) => {
        console.error('GitHub Login Failed:', error);
        alert('GitHub login failed. Please try again.');
    };

    return (
        <section >
            <div className="login-container">
                <div>
                    <img className="splash-screen" alt="logo"src="./assets/logo.png"></img>
                </div>
                <div className="oauth-login">
                    <GitHubLoginButton
                        className="github-login-button"
                        clientId="Ov23liLDl2KIZYefq5dU" 
                        onSuccess={handleGitHubLoginSuccess}
                        onFailure={handleGitHubLoginFailure}
                    />
                </div>
            </div>
        </section>
    );
};

export default Login;
