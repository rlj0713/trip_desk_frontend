import React from 'react';
import { connect } from 'react-redux';
import { createCustomer } from '../actions/customerActions';

class CustomerNew extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          first_name: '',
          last_name: ''
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
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

    onFormSubmit(e) {
        e.preventDefault();
        this.props.createCustomerWithDispatch(this.state)
        window.location.replace(`http://localhost:3001/customers`)
      }

    render() {
        return (
          <form className="new-customer" onSubmit={this.onFormSubmit}>
              
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
            <button class="crudButtonNewCustomer" type="submit">Add Customer</button>
          </form>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      customers: state.customers,
      loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCustomerWithDispatch: (userInput) => dispatch(createCustomer(userInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerNew)