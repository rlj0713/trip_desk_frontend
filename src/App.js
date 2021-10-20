import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchReservations } from './actions/reservationActions'

import Navigation from './components/Navigation.js'

import ReservationsList from './components/ReservationsList'
import ReservationNew from './components/ReservationNew'

import GuidesList from './components/GuidesList'
import GuideNew from './components/GuideNew'

import CustomersList from './components/CustomersList'
import CustomerNew from './components/CustomerNew'

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
          <Route exact path="/" render={routerProps => <ReservationsList {...routerProps} reservations={this.props.reservations}/>}/>
          <Route path='/reservations/new' render={routerProps => <ReservationNew {...routerProps} reservations={this.props.reservations}/>}/>
          <Route path='/reservations' render={routerProps => <ReservationsList {...routerProps} reservations={this.props.reservations}/>}/>

          <Route path='/guides/new' render={routerProps => <GuideNew {...routerProps} guides={this.props.guides}/>}/>
          <Route path='/guides' render={routerProps => <GuidesList {...routerProps} guides={this.props.guides}/>}/>

          {/* <Route path='/customer/new' render={routerProps => <CustomerNew {...routerProps} guides={this.props.customers}/>}/> */}
          <Route path='/customers' render={routerProps => <CustomersList {...routerProps} guides={this.props.customers}/>}/>
        </div>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reservations: state.reservationsReducer.reservations,
    loading: state.reservationsReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReservationsWithDispatch: () => dispatch(fetchReservations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
