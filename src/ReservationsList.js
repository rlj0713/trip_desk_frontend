import React from 'react';

class ReservationsList extends React.Component {
  
  // Format 2021-07-13T00:00:00.000Z --> July, 13 2021
  convertDate(date) {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let newDate = date.split('T')[0].split('-')
    return `${months[parseInt(newDate[1]) - 1]}, ${newDate[2]} ${newDate[0]}`
  }

  render() {
    console.log(this.props.reservations)
    return (
      this.props.reservations.map(reservation => 
        <div key={reservation.id} className="reservationCard">
            Reservation Date: {this.convertDate(reservation.reservation_date)}<br/>
            Guide: { reservation.guide_id ? reservation.guide.first_name : "No Guide Selected" }<br/>
            Customer Name: {`${reservation.customer.first_name} ${reservation.customer.last_name}`}<br/>
            <div>
              <button className="crudButton">Edit</button>
              <button className="crudButton">Delete</button>
            </div>
        </div>)
    )
  }
}

export default ReservationsList;