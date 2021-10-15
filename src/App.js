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
  
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <div className="dateCard">
        <ReservationsList reservations={this.props.reservations} />
      </div>
    }
  }
  
  render() {
    return (

      <Router>

        <div className="App">
          <header className="app-header">
            <Navigation />
          </header>
          <body>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path='/reservations' render={routerProps => <ReservationsPage {...routerProps} reservations={this.props.reservations}/>}/>
            {this.handleLoading()}
          </body>
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
