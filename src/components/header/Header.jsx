import React from 'react';
import "./header.scss";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Songs or Artists" />
            </div>

            <div className="header__right">
                <Avatar src="" alt="profile pic"/>
                <h4>some name</h4>
            </div>
        </div>
    )
}
