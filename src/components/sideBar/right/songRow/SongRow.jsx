import React from 'react';
import './songRow.scss';

export default function SongRow({track}) {
    return (
        <div className="songRow">
            {/* click image = song url redirect */}
            <img className="songRow__album" src={track.album.images[0].url} alt="album cover" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist)=> artist.name).join(", ")} - {" "} {track.album.name}
                </p>
            </div>
        </div>
    )
}
