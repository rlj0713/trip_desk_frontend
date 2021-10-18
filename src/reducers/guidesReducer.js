const guidesReducer = (state = { guides: [], loading: true }, action) => {
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
            const newGuides = state.guides.filter(guide => {
                return guide.id !== action.payload.id
            })

            return {
                ...state,
                guides: newGuides
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