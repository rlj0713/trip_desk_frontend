export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CUSTOMERS'})
        fetch('http://localhost:3000/customers.json').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_CUSTOMERS', customers: responseJSON })
        })
    }
}

export const deleteCustomers = (customerObject) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/customers/${customerObject.id}.json`, { method: "DELETE" })
        .then(res => {
            dispatch({ type: 'DELETE_CUSTOMER', payload: customerObject }) 
        })
        .catch((error) => {
            alert('Before deleting a customer, please remove him/her from the schedule.');
        })
    }
}

export const createCustomer = (userInput) => {
    let _data = {
        first_name: userInput.first_name,
        last_name: userInput.last_name
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(_data)
    }
    
    return(dispatch) => {
        fetch('http://localhost:3000/customers', configObj)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: 'CREATE_CUSTOMER', payload: json['data'] }) 
        })
    }
}