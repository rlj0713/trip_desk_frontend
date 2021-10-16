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
        
        // .then(res => console.log(`Object deleted from backend: ${res}`))
        .then(res => {
            dispatch({ type: 'DELETE_RESERVATION', payload: reservationObject }) 
        })
    }
    
}

export const createReservation = () => {
    return(dispatch) => {

        return fetch('http://localhost:3000/reservations/new.json'), { method: "POST" }
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'CREATE_RESERVATION', reservations: responseJSON })
        })
    }
}