import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReservations }

import './App.css';
import Reservation from '../src/reservation-card/Reservation.js'
import Navigation from '../src/nav-bar/Navigation.js'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Navigation />
      </header>
        <body>
          <Reservation />
        </body>
    </div>
  );
}

export default App;
