//this is main content side
import React from 'react';
import Header from '../../header/Header';
import './rightBar.scss';


export default function RightBar({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify}/>
        </div>
    )
}
