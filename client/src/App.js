import React, { useState, useEffect } from 'react';

import { Login, Register, Home, TempPlayer } from './components';
import firebase from './services/firebase';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App () {

  document.documentElement.classList.remove( "nav-open" );
  React.useEffect( () => {
    document.body.classList.add( "index" );
    return function cleanup () {
      document.body.classList.remove( "index" );
    };
  } );

  const [ user, setUser ] = useState( null );

  useEffect( () => {
    firebase.auth().onAuthStateChanged( user => {
      setUser( user );
    } )
  }, [] );

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ user ? <Home user={ user } /> : <Login /> } />
        <Route path="login" element={ user ? <Home user={ user } /> : <Login /> } />
        <Route path="register" element={ user ? <Home user={ user } /> : <Register /> } />
        <Route path="/player/:id" element={ user ? <TempPlayer /> : <Login /> }></Route>
      </Routes>
    </div>
  );
}

export default App;