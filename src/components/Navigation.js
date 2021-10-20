import React from 'react';

export default class Navigation extends React.Component {

    displayCreate = () => {
        if (window.location.href === "http://localhost:3001/" || window.location.href === "http://localhost:3001/reservations") {
            return (
                <a className="specialLink" href="http://localhost:3001/reservations/new">Create Reservation</a>
            )
        } else if (window.location.href === "http://localhost:3001/guides") {
            return (
                <a className="specialLink" href="http://localhost:3001/guides/new">Create Guide</a>
            )
        } else if (window.location.href === "http://localhost:3001/customers") {
            return (
                <a className="specialLink" href="http://localhost:3001/customers/new">Create Customer</a>
            )
        }
    }


    render () {
        return(
            <nav className="nav">
                <a className="regularLink" href="http://localhost:3001/">Reservations</a>
                <a className="regularLink" href="http://localhost:3001/guides">Guides</a>
                <a className="regularLink" href="http://localhost:3001/customers">Customers</a>
                {this.displayCreate()}
            </nav>
        )
    }

}