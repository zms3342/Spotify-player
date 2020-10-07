import React, {useEffect, useState} from 'react';
import './App.css';
import Player from './components/Player'
import Login from './components/Login';
import {getTokenFromResponse} from './spotify.js'
import SpotifyWebApi from "spotify-web-api-js"
import {useStateProviderValue} from "./StateProvider"

//allows spotify to talk to my react app
const spotify = new SpotifyWebApi();

function App() {
  //Line of code to pull anything from the data layer
  const [{user, token}, dispatch] = useStateProviderValue()
  //getting the token and add state 
  //will load when once when the app runs, and 
  //again if the variable changes
  useEffect(() => { 
    //get the full token
    const hash = getTokenFromResponse();
    //in the bar, only display ""
    window.location.hash = "";
    //set a _token variable = key
    const _token = hash.access_token; 

    //update the token state variable
    if (_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token  
      })
      spotify.setAccessToken(_token);
      //async that will help me get the user
      spotify.getMe().then(user => {
        //send token to data layer 
        dispatch({
          type: 'SET_USER',
          user: user,
  
        })
      })

    }

    console.log("i have token", hash);

  }, []);

  console.log("hello", user);
  console.log("token", token)



  return (
    <div className="app">
    {
      token ? (
        <h1>I am logged in</h1>
      ) : (
        <Login />
      )
    }
      {/* logo */}
      {/* login with spotify button */}
    </div>
  );
}

export default App;