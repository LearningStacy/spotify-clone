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
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                    
                </div>
                {/* List of songs */}
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
            
        </div>
    )
}
