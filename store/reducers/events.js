import { SET_EVENTS_ALL, SET_EVENTS_FILTERED } from "../actions/events";


const eventsReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_EVENTS_ALL:
            return {
                all: action.events
            }
        case SET_EVENTS_FILTERED:
            return {
                ...state,
                filtered: action.filteredEvents
            }
        default:
            return state;
    }
}

export default eventsReducer;
