import React from 'react';
import { Route } from "react-router-dom";
import ReservationList from "../components/ReservationList"
import ReservationShow from "../components/ReservationShow"

const ReservationPage = ({ match, reservations }) => (
    <div>
        <ReservationList reservations={reservations} />
        <Route
            exact
            path={`${match.url}/:reservationId`}
            render={(routerProps) => <ReservationShow {...routerProps} reservations={reservations} />}
        />
    </div>
)

export default ReservationPage