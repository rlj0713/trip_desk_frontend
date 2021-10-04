import React from "react";
import Reservation from './Reservation.js'

export default class ReservationCard extends React.Component {

    render () {
        return(
            <div className="reservationCard">
                <Reservation />
            </div>
        )
    }
}