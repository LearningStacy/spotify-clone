import React from 'react';
import SideOptions from '../../sideOptions/SideOptions';
import './leftBar.scss';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../../dataLayer';

export default function LeftBar() {
    //pulling user's playlist from dataLayer
    const [{playlists}, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <div className="img__container">
                <img className= "sidebar__logo" src="/title_icon.png" alt="logo" /> 
                <h5>musikHand</h5> 
            </div>

            <SideOptions Icon={HomeIcon} title="Home"/>
            <SideOptions Icon={SearchIcon} title="Search"/>
            <SideOptions Icon={LibraryMusicIcon}title="Your Library"/>


            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {/* check if the playlist is empty -  */}
            {playlists?.items?.map(playlist => (
                <SideOptions title = {playlist.name} />
            ))}
            
        </div>
    );
}
