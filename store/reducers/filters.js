import { SET_FILTER } from "../actions/filters";


const filterReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                [action.category]: action.filter
            }
        default:
            return {
                ...state
            }
    }
}


export {
    filterReducer
}
