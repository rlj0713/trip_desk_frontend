import React from 'react';
import { connect } from 'react-redux';
import { createReservation } from '../actions/reservationActions';
import { fetchGuides } from '../actions/guideActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class ReservationNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation_date: new Date(),
      guide_id: null,
      customer_id: null,
      guides: [],
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleGuideChange = this.handleGuideChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGuidesWithDispatch();
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

  // Rewrite this as a ternary operator to trigger re-render properly
  onFormSubmit(e) {
    e.preventDefault();
    // const userInput = this.state
    this.props.createReservationWithDispatch(this.state);
    window.location.replace(`http://localhost:3001/reservations`);
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
        {/* Go back and dynamically populate this picker */}
        Guide:{" "}
        <select
          name="Guide"
          className="input"
          onChange={this.handleGuideChange}
        >
          {this.populateGuideDropdown()}
          {/* <option value="0">Unselected</option>
                  <option value="1">Brady Chadley</option>
                  <option value="2">Shred McNasty</option>
                  <option value="3">Broseph Broseidon</option> */}
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
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createReservationWithDispatch: (userInput) => dispatch(createReservation(userInput)),
      fetchGuidesWithDispatch: () => dispatch(fetchGuides())
    }
  } 

export default connect(mapStateToProps, mapDispatchToProps)(ReservationNew);