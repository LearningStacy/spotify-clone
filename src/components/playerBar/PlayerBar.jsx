import React, { useEffect } from 'react';
import './playerBar.scss';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDataLayerValue } from '../../dataLayer';
import { PauseCircleOutlineIcon } from '@material-ui/icons/PauseCircleOutline';

export default function PlayerBar({spotify}) {
    const [{token, item, playing}, dispatch] = useDataLayerValue();

    useEffect(()=> {
        // dispatch({
        //     type: "SET_SPOTIFY",
        //     spotify: spotify,
        // });
        
        spotify.getMyCurrentPlaybackState().then((response) => {
            console.log(response);

            dispatch({
                type: "SET_PLAYING",
                playing: response.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: response.item,
            });
        });
    }, [spotify]);
    
    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack()
        .then((response)=> {
            dispatch({
                type: "SET_ITEM",
                item: response.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack()
        .then((response) => {
            dispatch({
                type: "SET_ITEM",
                item: response.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };

    const PlayPause = () => {
        if(playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    
    return (
        <div className="footer">
            {/* Song details  */}
            <div className="footer__left">
                <img className = "footer__albumLogo" src={item?.album.images[0].url} alt={item?.name} />
                
                {
                    item ? (
                        <div className="footer__songInfo">
                            <h4>{item.name}</h4>
                            <p>
                                {item.artists.map((artist)=> 
                                    artist.name).join(", ")}
                            </p>
                        </div>
                    ) : (
                        
                <div className="footer__songInfo">
                    <h4>No Song is Playing</h4>
                    <p>...</p>
                </div>
                    )
                }
                
            </div>

            {/* Player controls */}
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>

                {/* Previous Button functionality */}
                <SkipPreviousIcon 
                    className="footer__icon"
                    onClick={skipNext}
                />
                
                {/* Play Pause */}
                {playing ? (
                    <PauseCircleOutlineIcon 
                        onClick={PlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                    ): (
                    <PlayCircleOutlineIcon 
                    fontSize="large" 
                    className="footer__icon"
                    onClick={PlayPause}
                    />
                    
                )}
                
                <SkipNextIcon 
                    className="footer__icon"
                    onClick={skipPrevious}/>

                
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

                    <Grid item xs> 
                        <Slider
                            aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
