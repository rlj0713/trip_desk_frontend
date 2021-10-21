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
        resObject: {},
        reservation_date: null,
        guide_id: null,
        customer: null,
        guides: []
      }
      // this.handleDateChange = this.handleDateChange.bind(this);
      this.handleGuideChange = this.handleGuideChange.bind(this);
      this.handleCustomerChange = this.handleCustomerChange.bind(this);
      // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // I need to make the old date appear in the form as the default value when rendering edit
    componentDidMount() {
      const foundObject = this.reservationToEdit(this.state.resObjectId)
      this.setState({
        resObject: foundObject,
        // reservation_date: this.state.resObject.reservation_date,
      })
      this.props.fetchCustomersWithDispatch();
      this.props.fetchGuidesWithDispatch();
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
      console.log(this.props)
      if (this.props.guides) {
        return(
          this.props.guides.map(guide => 
            <option value={guide.attributes.id}>{guide.attributes.first_name} {guide.attributes.last_name}</option>
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
    
    reservationToEdit = (resObjectId) => {
        return this.props.reservations.find(res => {
          return res.id === this.state.resObjectId ? res : "Loading..."
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
      loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomersWithDispatch: () => dispatch(fetchCustomers()),
    fetchGuidesWithDispatch: () => dispatch(fetchGuides())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ReservationEdit);