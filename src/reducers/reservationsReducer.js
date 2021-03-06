const reservationsReducer = (state = { reservations: [], reservation: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_RESERVATIONS':
            return {
            ...state,
            reservations: [...state.reservations],
            loading: true
            }
        case 'ADD_RESERVATIONS':
            return {
            ...state,
            reservations: action.reservations,
            loading: false
            }
        case 'GET_RESERVATION':
            return {
            ...state,
            reservation: action.reservation,
            loading: false
            }    
        case 'DELETE_RESERVATION':
            const newRes = state.reservations.filter(res => {
                return res.id !== action.payload.id
            })

            return {
                ...state,
                reservations: newRes
            }
        case 'CREATE_RESERVATION':
            return {
                ...state,
                reservations: [...state.reservations, action.payload]
            }

        default:
            return state;
    }
  }
  
  export default reservationsReducer;