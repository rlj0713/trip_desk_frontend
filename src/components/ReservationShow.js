import React from 'react';

const ReservationShow = ( {match, reservations } ) => {
    return (
        <div>
            <h2>{reservations[match.params.reservationdId].reservation_date}</h2>
        </div>
    )
}

export default ReservationShow;