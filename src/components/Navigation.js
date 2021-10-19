import React from 'react';

export default class Navigation extends React.Component {

    displayCreate = () => {
        if (window.location.href == "http://localhost:3001/" || window.location.href == "http://localhost:3001/reservations") {
            return (
                <a href="http://localhost:3001/reservations/new">Create Reservation</a>
            )
        } else if (window.location.href == "http://localhost:3001/guides") {
            return (
                <a href="http://localhost:3001/guides/new">Create Guide</a>
            )
        }
    }


    render () {
        return(
            <nav className="nav">
                <a href="http://localhost:3001/">Reservations</a>
                {/* <a href="http://localhost:3001/reservations/new">Create Reservation</a> */}
                <a href="http://localhost:3001/guides">Guides</a>
                {/* <a href="http://localhost:3001/guides/new">Create Guide</a> */}
                <a href="http://localhost:3001/customers">Customers</a>
                {this.displayCreate()}
            </nav>
        )
    }

}