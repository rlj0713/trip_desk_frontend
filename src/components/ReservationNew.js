import React from 'react';
import { connect } from 'react-redux';
import { createReservation } from '../actions/reservationActions';
import { fetchGuides } from '../actions/guideActions';
import { fetchCustomers } from '../actions/customerActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class ReservationNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation_date: null,
      guide_id: null,
      customer_id: null,
      guides: []
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleGuideChange = this.handleGuideChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGuidesWithDispatch();
    this.props.fetchCustomersWithDispatch();
  }

  populateGuideDropdown = () => {
    if (this.props.guides) {
      return(
        this.props.guides.map(guide => 
          <option value={guide.id}>{guide.attributes.first_name} {guide.attributes.last_name}</option>
        )
      )
    }
  };

  populateCustomerDropdown = () => {
    if (this.props.customers) {
      return(
        this.props.customers.map(customer => 
          <option value={customer.id}>{customer.attributes.first_name} {customer.attributes.last_name}</option>
        )
      )
    }
  };

  handleDateChange(date) {
    this.setState({
      reservation_date: date,
    });
  }
  
  handleGuideChange(e) {
    e.preventDefault();
    this.setState({
      guide_id: e.target.value,
    });
  }

  handleCustomerChange(e) {
    e.preventDefault();
    this.setState({
      customer_id: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.createReservationWithDispatch(this.state);
    window.location.replace(`http://localhost:3001/reservations`);
  }

  render() {
    return (
      <form className="new-res" onSubmit={this.onFormSubmit}>
        <label for="date" className="datepicker-label">Date:</label>
        <DatePicker
          id="date"
          className="datepicker"
          selected={this.state.reservation_date}
          onChange={this.handleDateChange}
          name="date"
          dateFormat="MM/dd/yyyy"
        />
        {" "}
        <label for="guide" className="guide-label">Guide:</label>
        <select
          name="Guide"
          id="guide"
          className="input"
          onChange={this.handleGuideChange}
        >
          {this.populateGuideDropdown()}
        </select>
        {" "}
        <label for="customer" className="customer-label">Customer:</label>
        <select
          id="customer"
          name="Customer"
          className="input"
          onChange={this.handleCustomerChange}
        >
          {this.populateCustomerDropdown()}
        </select>
        <button type="submit">Add Reservation</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        reservations: state.reservations,
        guides: state.guidesReducer.guides.data,
        customers: state.customersReducer.customers.data,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createReservationWithDispatch: (userInput) => dispatch(createReservation(userInput)),
      fetchGuidesWithDispatch: () => dispatch(fetchGuides()),
      fetchCustomersWithDispatch: () => dispatch(fetchCustomers())
    }
  } 

export default connect(mapStateToProps, mapDispatchToProps)(ReservationNew);