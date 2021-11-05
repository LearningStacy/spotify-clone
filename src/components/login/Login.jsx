import React from 'react';
import './login.scss';

export default function Login() {
    return (
        <div className="login">
            <div className="logo">
                <img src="/title_icon.png" alt="logo"/>
            </div>
            {/* <h1>Welcome to musikHand</h1> */}
            
            <a>Log In with Spotify</a>
        </div>
    )
}
