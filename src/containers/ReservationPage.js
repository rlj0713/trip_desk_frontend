import React from 'react';
import { Route } from "react-router-dom";
import ReservationsList from "../components/ReservationsList"
import ReservationShow from "../components/ReservationShow"

const ReservationPage = ({ match, reservations }) => (
    <div>
        <ReservationsList reservations={reservations} />
        <Route
            exact
            path={`${match.url}/:reservationId`}
            render={(routerProps) => <ReservationShow {...routerProps} reservations={reservations} />}
        />
    </div>
)

export default ReservationPage