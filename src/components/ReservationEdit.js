import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class ReservationEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            resObjectId: props.match.params.id,
            resObject: {},
            reservation_date: null
        }
    }

    // I need to make the old date appear in the form as the default value when rendering edit
    componentDidMount() {
        const foundObject = this.reservationToEdit(this.state.resObjectId)
        this.setState({
            resObject: foundObject,
            reservation_date: this.state.resObject.reservation_date
        })
    }
    
    reservationToEdit = (resObjectId) => {
            return this.props.reservations.find(res => {
                return res.id === this.state.resObjectId ? res : "hello world"
            }
        )
    }

    // Attempting to single out the object that is to be edited
    render() {
        return (
            <form className="new-res" onSubmit={this.onFormSubmit}>
        <DatePicker
        //   value={this.state.resObject.reservation_date}
          className="datepicker"
        //   selected={this.state.reservation_date}
        //   onChange={this.handleDateChange}
          name="date"
          dateFormat="MM/dd/yyyy"
        />
        {" "}
        <select
          name="Guide"
          value=""
          className="input"
          onChange={this.handleGuideChange}
        >
          {/* {this.populateGuideDropdown()} */}
        </select>
        {" "}
        <select
          name="Customer"
          className="input"
          onChange={this.handleCustomerChange}
        >
          {/* {this.populateCustomerDropdown()} */}
        </select>
        <button type="submit">Update Reservation</button>
      </form>
        )
    }
}

export default ReservationEdit;