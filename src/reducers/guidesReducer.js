const guidesReducer = (state = { guides: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_GUIDES':
            return {
            ...state,
            guides: [...state.guides],
            loading: true
            }
        case 'ADD_GUIDES':
            return {
            ...state,
            guides: action.guides,
            loading: false
            }
        case 'DELETE_GUIDE':
            const newRes = state.guides.filter(res => {
                return res.id !== action.payload.id
            })

            return {
                ...state,
                guides: newRes
            }
        case 'CREATE_GUIDE':
            return {
                ...state,
                guides: [...state.guides, action.payload]
            }

        default:
            return state;
    }
  }
  
  export default guidesReducer;