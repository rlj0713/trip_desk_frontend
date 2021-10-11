const reservationsReducer = (state = { reservations: [], loading: false }, action) => {
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
      default:
        return state;
    }
  }
  
  export default reservationsReducer;