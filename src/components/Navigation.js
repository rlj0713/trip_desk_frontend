import React from 'react';

export default class Navigation extends React.Component {

    
    render () {
        return(
            <nav className="nav">
                <a href="http://localhost:3001/">Home</a>
                <a href="http://localhost:3001/reservations/new">Create Reservation</a>
            </nav>
        )
    }

}