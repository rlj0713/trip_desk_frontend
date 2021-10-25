import React from 'react';
import { getReservation } from '../actions/reservationActions';
import { connect } from 'react-redux';

class Reservation extends React.Component {

  // When the hell does everything happen!!???
  componentDidMount() {    
    this.props.getReservationWithDispatch(this.props.match.params.id)
  }

  convertDate(date) {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let newDate = date.split('T')[0].split('-')
    return `${months[parseInt(newDate[1]) - 1]}, ${newDate[2]} ${newDate[0]}`
  }

  handleEdit() {
    window.location.replace(`http://localhost:3001/reservation/${this.props.match.params.id}/edit`)
  }

  render() {
    console.log(this.props)
    if (this.props.reservation.customer) {
      return (
        <div className="old-res">
          Reservation Date: {this.convertDate(this.props.reservation.reservation_date)} <br />
          Guide Name: {this.props.reservation.guide.first_name} <br />
          Customer Name: {this.props.reservation.customer.first_name}
          {/* <div>
            <button className="crudButton" onClick={() => this.handleEdit()}>Edit</button>
          </div> */}
        </div>       
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    reservation: state.reservationsReducer.reservation,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReservationWithDispatch: (id) => dispatch(getReservation(id))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);