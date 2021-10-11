import React from "react";

export default class Reservation extends React.Component {
    state ={
        reservations: []
    }

    // Format 2021-07-13T00:00:00.000Z --> July, 13 2021
    convertDate(date) {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        let newDate = date.split('T')[0].split('-')
        return `${months[parseInt(newDate[1]) - 1]}, ${newDate[2]} ${newDate[0]}`
    }

    componentDidMount() {
        fetch("http://localhost:3000/reservations.json")
        .then(res => res.json())
        .then(data => {
            this.setState({
                reservations: data
            })
        })
    }
    
    render () {
        return(
            this.state.reservations.map((reservation) => 
                <div className="reservationCard">
                    Reservation Date: {this.convertDate(reservation.reservation_date)}<br/>
                    Guide: { reservation.guide_id ? reservation.guide.first_name : "No Guide Selected" }<br/>
                    Customer Name: {`${reservation.customer.first_name} ${reservation.customer.last_name}`}
                </div>)
        )
    }
}