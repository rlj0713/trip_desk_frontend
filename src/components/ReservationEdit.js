import React from 'react';
// import { getReservation } from '../actions/reservationActions';
import { connect } from 'react-redux';

export default class ReservationEdit extends React.Component {
    render() {
        if (this.props.reservation.customer) {
            return (
                <div>
                    Edit this
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

// const mapStateToProps = (state) => {
//     return {
//       reservation: state.reservationsReducer.reservation,
//     }
// }
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       getReservationWithDispatch: (id) => dispatch(getReservation(id))
//     }
// } 


// export default connect(mapStateToProps, mapDispatchToProps)(ReservationEdit);