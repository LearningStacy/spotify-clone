import React from 'react';
import { loginUrl } from '../../spotifyApi';
import './login.scss';

export default function Login() {
    return (
        <div className="login">
            <div className="logo">
                <img src="/title_icon.png" alt="logo"/>
            </div>
            <h2 className="logo-text">Welcome to musikHand</h2>
            
            <a href={loginUrl}>Log In with Spotify</a>
        </div>
    )
}
