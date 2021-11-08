// import './app.scss';
import { useEffect, useState } from 'react';
import Login from './components/login/Login';
import { getAccessToken } from './spotifyApi';
import Player from './components/player/Player';

import {useDataLayerValue} from './dataLayer';

import SpotifyWebApi from 'spotify-web-api-js';
//'super object' aka instance so other places have access to info
const spotify = new SpotifyWebApi();

function App() {
  //get token from dataLayer instead state
  const [{token}, dispatch] = useDataLayerValue();
  
  //if any changes happens in url - grab such change (hash)
  useEffect(() => {
    // hash contains the accessToken, hash is not token itself
    const hash = getAccessToken();

    // remove accessToken from url -security
    window.location.hash="";

    const _token = hash.access_token;
    // console.log(_token);

    
    // checking if token exists
    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //set accessToken for api to use (connect spotify to myApp)
      spotify.setAccessToken(_token); 

      spotify.getMe().then((user) => {       
        dispatch({
          type: 'SET_USER',
          user: user});
      });

      //pull user's playlist 
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      }); 

      //this is my specific playlist id for discover weekly
      spotify.getPlaylist('6ehdSiG3d2TinBXr1r7ZK0')
      .then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists()
      .then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        });
      });

      
    }
  }, [token, dispatch]);


  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
          // <Player />
        ) : (
          
          <Login/>
        )
      }
      {/* <Player/> */}
    </div>
  );
}

export default App;
