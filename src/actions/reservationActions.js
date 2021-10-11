export const fetchReservations = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_RESERVATIONS'})
      fetch('http://localhost:3000/reservations.json').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_RESERVATIONS', reservation: responseJSON.reservation_date })
      })
    }
  }