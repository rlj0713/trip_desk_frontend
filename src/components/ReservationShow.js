import React from 'react';
import { match } from 'sinon';

const ReservationShow = ( {match, reservations } ) => {
    return (
        <div>
            <h2>{reservations[match.params.reservationdId].reservation_date}</h2>
        </div>
    )
}