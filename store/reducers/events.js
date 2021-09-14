import { SET_ALL_EVENTS, SET_FILTERED_EVENTS } from "../actions/events";


const eventsReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_ALL_EVENTS:
            return {
                all: action.events
            }
        case SET_FILTERED_EVENTS:
            return {
                ...state,
                filtered: action.filteredEvents
            }
        default:
            return state;
    }
}

export default eventsReducer;
