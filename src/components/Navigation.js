import React from 'react';

export default class Navigation extends React.Component {

    
    render () {
        return(
            <nav className="nav">
                <a href="http://localhost:3001/">Reservations</a>
                <a href="http://localhost:3001/guides">Guides</a>
                <a href="http://localhost:3001/customers">Customers</a>
                <a class="navButton" href="http://localhost:3001/reservations/new">Create Reservation</a>
                <a class="navButton" href="http://localhost:3001/guides/new">Create Guide</a>
            </nav>
        )
    }

}