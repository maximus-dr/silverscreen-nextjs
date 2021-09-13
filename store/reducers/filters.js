import { SET_EVENT_FILTER, SET_SHOW_FILTER, UNSET_EVENT_FILTER } from "../actions/filters";


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

        case UNSET_EVENT_FILTER:
            const noEventFilter = {...state.events};
            delete noEventFilter[action.category];
            return {
                ...state,
                events: noEventFilter
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
