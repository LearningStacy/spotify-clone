// import './app.scss';
import { useEffect, useState } from 'react';
import Login from './components/login/Login';
import { getAccessToken } from './spotifyApi';

import SpotifyWebApi from 'spotify-web-api-js';
//'super object' aka instance so other places have access to info
const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  
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
      
      //testing api connection - getting user account
      spotify.getMe().then(user=>{
        console.log('user is', user);
      });
    }
    
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>Logged in </h1>
        ) : (
          
          <Login/>
        )
      }
    </div>
  );
}

export default App;
