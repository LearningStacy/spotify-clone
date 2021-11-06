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

  const [token, setToken] = useState(null);

  const [{user}, dispatch] = useDataLayerValue();
  
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
      setToken(_token);
      //set accessToken for api to use (connect spotify to myApp)
      spotify.setAccessToken(_token); 

      spotify.getMe().then((user) => {
        console.log('human user:' , user);
        
        dispatch({
          type: 'SET_USER',
          user: user});
      });
    }
    console.log('Token, you:', token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          
          <Login/>
        )
      }
    </div>
  );
}

export default App;
