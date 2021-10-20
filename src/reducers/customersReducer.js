const customersReducer = (state = { customers: [], loading: true }, action) => {
    switch(action.type) {
        case 'LOADING_CUSTOMERS':
            return {
            ...state,
            customers: [...state.customers],
            loading: true
            }
        case 'ADD_CUSTOMERS':
            return {
            ...state,
            customers: action.customers,
            loading: false
            }
        case 'DELETE_CUSTOMER':
            const newCustomers = state.customers.filter(customer => {
                return customer.id !== action.payload.id
            })

            return {
                ...state,
                customers: newCustomers
            }
        case 'CREATE_CUSTOMER':
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }

        default:
            return state;
    }
  }
  
  export default customersReducer;