import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from './actions/reservationActions'
import ReservationsList from './ReservationsList'

import './App.css';
import Navigation from '../src/nav-bar/Navigation.js'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchReservations()
  }
  
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ReservationsList reservations={this.props.reservations} />
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <Navigation />
        </header>
        <body>
          {/* Old Div: <Reservation /> crated using react, not redux*/}
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
    fetchReservations: () => dispatch(fetchReservations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
