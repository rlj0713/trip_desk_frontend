import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from './actions/reservationActions'
import { deleteReservations } from './actions/reservationActions'
import ReservationsList from './ReservationsList'

import './App.css';
import Navigation from '../src/nav-bar/Navigation.js'

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
      <div className="App">
        <header className="app-header">
          <Navigation />
        </header>
        <body>
          {this.handleLoading()}
        </body>
      </div>
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
