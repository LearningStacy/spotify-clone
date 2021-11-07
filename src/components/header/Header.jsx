import React from 'react';
import "./header.scss";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../dataLayer';

export default function Header() {
    const [{user}, dispatch] = useDataLayerValue();
    
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Songs or Artists" />
            </div>

            <div className="header__right">
                {/* get user profile pic and name */}
                <Avatar src={user?.images[0]?.url} alt="profile pic"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
