import React from 'react';
import { connect } from 'react-redux';
import { createReservation } from '../actions/reservationActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class ReservationNew extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
          reservation_date: new Date(),
          first_name: '',
          last_name: '',
          guide_id: null
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleGuideChange = this.handleGuideChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    // Fix this redundancy
    // handleAnyChange(event, key) {
    //   event.preventDefault();
    //   this.setState({
    //     key: event.target.value
    //   })
    // }


      handleDateChange(date) {
        this.setState({
          reservation_date: date
        })
      }

      handleFirstNameChange(e) {        
        e.preventDefault();
        this.setState({
            first_name: e.target.value
          })  
      }

      handleLastNameChange(e) {        
        e.preventDefault();
        this.setState({
            last_name: e.target.value
          })  
      }

      handleGuideChange(e) {        
        e.preventDefault();
        this.setState({
            guide_id: e.target.value
          })  
      }
    
      // Rewrite this as a ternary operator to trigger re-render properly
      onFormSubmit(e) {
        e.preventDefault();
        // const userInput = this.state
        this.props.createReservationWithDispatch(this.state)
        window.location.replace(`http://localhost:3001/reservations`)
      }
    
    render() {
        return (
          <form className="new-res" onSubmit={this.onFormSubmit}>
              
            <input className="input"
                name="first_name"
                type="text" 
                placeholder="First Name"
                onChange={this.handleFirstNameChange}
            />
            <input className="input"
                name="last_name"
                type="text" 
                placeholder="Last Name"
                onChange={this.handleLastNameChange}
            />
            <DatePicker
                className="datepicker"
                selected={this.state.reservation_date}
                onChange={this.handleDateChange}
                name="date"
                dateFormat="MM/dd/yyyy"
            />
            {/* Go back and dynamically populate this picker */}
            <select
                name="cars"
                className="input"
                onChange={this.handleGuideChange}
                >
                    <option value="0">Unselected</option>
                    <option value="1">Brady Chadley</option>
                    <option value="2">Shred McNasty</option>
                    <option value="3">Broseph Broseidon</option>
            </select>
            <button type="submit">Add Reservation</button>
          </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reservations: state.reservations,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createReservationWithDispatch: (userInput) => dispatch(createReservation(userInput))
    }
  } 

export default connect(mapStateToProps, mapDispatchToProps)(ReservationNew);