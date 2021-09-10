import { SET_EVENT_FILTER, SET_SHOW_FILTER } from "../actions/filters";


const filterReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_EVENT_FILTER:
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.category]: action.filter
                }
            }
        case SET_SHOW_FILTER:
            return {
                ...state,
                shows: {
                    ...state.shows,
                    [action.category]: action.filter
                }
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
