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
        first_name: userInput.first_name,
        last_name: userInput.first_name,
        guide_id: userInput.guide_id
    }
    
// Data is making it to the fetch, but the back-end does not recognize the request.
    return(dispatch) => {

        fetch('http://localhost:3000/reservations/new.json', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(data =>  console.log(data))
        .catch(err => console.log(err))
    }
}