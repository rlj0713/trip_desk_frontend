import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchCustomers } from '../actions/customerActions';
import { fetchGuides } from '../actions/guideActions';
import { connect } from 'react-redux';

class ReservationEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resObjectId: props.match.params.id,
      resObject: []
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleGuideChange = this.handleGuideChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    let selectedReservation = this.props.reservations.filter(res => res.id === this.state.resObjectId)

    this.setState({
      resObject: selectedReservation
    })
    this.props.fetchCustomersWithDispatch();
    this.props.fetchGuidesWithDispatch();
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  };

  reservationToEdit = (resObjectId) => {
    return this.props.reservations.find(res => {
      return res.id === this.state.resObjectId ? res : "Loading..."
    })
  }

  handleCustomerChange(e) {
    e.preventDefault();
    this.setState({
      customer_id: e.target.value,
    });
  }
  
  populateCustomerDropdown = () => {
    if (this.props.reservations) {
      return(
        this.props.reservations.map(res => 
          <option value={res.customer.id}>{res.customer.first_name} {res.customer.last_name}</option>
        )
      )
    }
  };

  populateGuideDropdown = () => {
    if (this.props.guides) {
      return(
        this.props.guides.map(guide => 
          <option value={guide.id}>{guide.attributes.first_name} {guide.attributes.last_name}</option>
        )
      )
    }
  };

  handleGuideChange(e) {
    e.preventDefault();
    this.setState({
      guide_id: e.target.value,
    });
  }

  handleDateChange(date) {
    this.setState({
      reservation_date: date,
    });
  }
    
  render() {
    return (
      <form className="new-res" onSubmit={this.onFormSubmit}>
        <DatePicker
          className="datepicker"
          selected={this.state.reservation_date}
          onChange={this.handleDateChange}
          name="date"
          dateFormat="MM/dd/yyyy"
        />
        {" "}
        <select
          name="Guide"
          className="input"
          onChange={this.handleGuideChange}
        >
          {this.populateGuideDropdown()}
        </select>
        {" "}
        <select
          name="Customer"
          className="input"
          onChange={this.handleCustomerChange}
        >
          {this.populateCustomerDropdown()}
        </select>
        <button type="submit">Update Reservation</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    guides: state.guidesReducer.guides.data,
    customers: state.customersReducer.customers.data,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomersWithDispatch: () => dispatch(fetchCustomers()),
    fetchGuidesWithDispatch: () => dispatch(fetchGuides())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ReservationEdit);