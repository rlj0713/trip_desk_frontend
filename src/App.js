import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchReservations } from './actions/reservationActions'
import { deleteReservations } from './actions/reservationActions'

import ReservationsList from './components/ReservationsList'
import ReservationsPage from './containers/ReservationPage'
import ReservationsShow from './components/ReservationShow'
import Navigation from './components/Navigation.js'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchReservationsWithDispatch()
  }
  
  render() {
    return (

      <Router>

        <div className="App">
          <header className="app-header">
            <Navigation />
          </header>
          <Route exact path="/" render={() => <a class="home" href="http://localhost:3001/reservations">Start Booking</a>} />
          <Route path='/reservations' render={routerProps => <ReservationsPage {...routerProps} reservations={this.props.reservations}/>}/>
        </div>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reservations: state.reservations,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReservationsWithDispatch: () => dispatch(fetchReservations()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
