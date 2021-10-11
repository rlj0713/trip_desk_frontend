import React from 'react';

class ReservationList extends React.Component {
  listReservations = () => {
    this.props.reservations.map((reservation) => 
        <div className="reservationCard">
            Reservation Date: {this.convertDate(reservation.reservation_date)}<br/>
            Guide: { reservation.guide_id ? reservation.guide.first_name : "No Guide Selected" }<br/>
            Customer Name: {`${reservation.customer.first_name} ${reservation.customer.last_name}`}
        </div>)
  }

  render() {
    return (
      <div>
        {this.listReservations()}
      </div>
    )
  }
}

export default ReservationList;