import React from 'react';
import './player.scss';
import LeftBar from '../sideBar/left/LeftBar';
import RightBar from '../sideBar/right/RightBar';
import PlayerBar from '../playerBar/PlayerBar';

export default function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                {/* SideBar */}
                <LeftBar/>

                {/* RightSide aka main */}
                <RightBar/>
                
                
                
            </div>
                {/* PlayBar aka where the play controls placed*/}
                <PlayerBar/>
        </div>
    )
}
