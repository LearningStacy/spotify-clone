import React from 'react';
import './playerBar.scss';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

export default function PlayerBar() {
    return (
        <div className="footer">
            {/* Song details  */}
            <div className="footer__left">
                <img className = "footer__albumLogo" src="" alt="album cover" />
                <div className="footer__songInfo">
                    <h4>No Song is Playing</h4>
                    <p>Artist Name</p>
                </div>
                
            </div>

            {/* Player controls */}
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>

            {/* Volume controls */}
            <div className="footer__right">
                {/* FRAMEWORK COMPONENTS */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>

                    <Grid item>
                        <Slider aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
