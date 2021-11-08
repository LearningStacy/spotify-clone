//this is main content side
import React from 'react';
import Header from '../../header/Header';
import './rightBar.scss';
import {useDataLayerValue} from '../../../dataLayer';
import PlayCircleFilledIcon  from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './songRow/SongRow';



export default function RightBar({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    
    const playPlaylist = (id) => {
        spotify.play({context_uri: `spotify:playlist:6ehdSiG3d2TinBXr1r7ZK0`})
        .then((response)=> {
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
        });    
    };
    
    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`],
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((response)=> {
                dispatch({
                    type: "SET_ITEM",
                    item: response.item,
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                });
            });
        });
    };

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                {/* discover weekly */}
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    {/* <h2>{discover_weekly?.name}</h2> */}
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist}/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                    
                </div>
                {/* List o
                f songs */}
                {discover_weekly?.tracks.items.map(item => (
                    // <SongRow track={item.track} />
                    <SongRow playSong = {playSong} track={item.track} />
                ))}
            </div>
            
        </div>
    )
}
