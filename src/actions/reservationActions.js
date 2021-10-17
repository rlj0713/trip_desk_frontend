export const fetchReservations = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RESERVATIONS'})
        
        fetch('http://localhost:3000/reservations.json').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_RESERVATIONS', reservations: responseJSON })
        })
    }
}

export const deleteReservations = (reservationObject) => {
    
    return(dispatch) => {

        fetch(`http://localhost:3000/reservations/${reservationObject.id}.json`, { method: "DELETE" })

        .then(res => {
            dispatch({ type: 'DELETE_RESERVATION', payload: reservationObject }) 
        })
    }
    
}

export const createReservation = (userInput) => {
    let _data = {
        reservation_date: userInput.reservation_date,
        // first_name: userInput.first_name,
        // last_name: userInput.first_name,
        customer_id: 1,
        guide_id: userInput.guide_id
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(_data)
    }
    
// Data is updating on the back-end but the global store is not updating!
    return(dispatch) => {
        fetch('http://localhost:3000/reservations', configObj)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: 'CREATE_RESERVATION', payload: json['data'] }) 
        })
    }
}