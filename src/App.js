// import './app.scss';
import { useEffect, useState } from 'react';
import Login from './components/login/Login';
import { getAccessToken } from './spotifyApi';
import Player from './components/player/Home';

import {useDataLayerValue} from './dataLayer';

import SpotifyWebApi from 'spotify-web-api-js';
//'super object' aka instance so other places have access to info
const spotify = new SpotifyWebApi();

function App() {
  //get token from dataLayer instead state
  const [{user, token}, dispatch] = useDataLayerValue();
  
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
    }
  }, []);

  return (
    <div className="app">
      {/* {
        token ? (
          <Player/>
        ) : (
          
          <Login/>
        )
      } */}
      <Player/>
    </div>
  );
}

export default App;
