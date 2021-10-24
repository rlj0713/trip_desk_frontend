import React from 'react';
import { fetchCustomers, deleteCustomers } from '../actions/customerActions';
import { connect } from 'react-redux';
import Picture from './Picture.js';

class CustomersList extends React.Component {
  
    componentDidMount() {
        this.props.fetchCustomersWithDispatch()
    }

    handleDelete(customer) {
        let c = window.confirm("Are you sure you want to remove this customer?");
            if (c === true) {
                this.props.deleteCustomersWithDispatch(customer)
                window.location.replace('http://localhost:3001/customers')
        }
    }

    displayCustomers() {
        return (    
            this.props.customers.map(customer => 
                <div key={customer.id} className="customerCard">
                    First Name: { customer.attributes.first_name }<br/>
                    Last Name: { customer.attributes.last_name }<br/>
                    <Picture />
                    <div>
                    <   button className="crudButtonCustomer" onClick={() => this.handleDelete(customer)}>Delete</button>
                    </div>
                </div>)
        )
    }

    render() {
        return (
            <div>
                {this.props.customers ? this.displayCustomers() : "Loading..."}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      customers: state.customersReducer.customers.data,
      loading: state.customersReducer.loading
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCustomersWithDispatch: (anyCustomerObject) => dispatch(deleteCustomers(anyCustomerObject)),
    fetchCustomersWithDispatch: () => dispatch(fetchCustomers())
  }
} 
  

export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);