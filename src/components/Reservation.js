import React from 'react';
import { getReservation } from '../actions/reservationActions';
import { connect } from 'react-redux';


class Reservation extends React.Component {

  componentDidMount() {
    this.props.getReservationWithDispatch(32)
  }

  // When loaded, this.props.reservation is populated!!!!!!!!!!!!!!!!!!!!!
  render() {
    console.log(this.props.reservation)
      return (
        <div>
            Hello Reservation
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  // console.log(state.reservationsReducer)
  return {
    reservation: state.reservationsReducer.reservation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReservationWithDispatch: (id) => dispatch(getReservation(id))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);