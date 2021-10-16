import React from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class ReservationNew extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
          date: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
      handleChange(date) {
        this.setState({
          date: date
        })
      }
    
      onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
      }
    
    render() {
        return (
          <form className="new-res" onSubmit={this.onFormSubmit}>
              
            <input className="input"
                type="text" 
                placeholder="First Name"
            />
            <input className="input"
                type="text" 
                placeholder="Last Name"
            />
            <DatePicker
                className="datepicker"
                selected={this.state.date}
                onChange={this.handleChange}
                name="date"
                dateFormat="MM/dd/yyyy"
            />
            <button type="submit">Add Reservation</button>
          </form>
        );
    }
}

export default ReservationNew;