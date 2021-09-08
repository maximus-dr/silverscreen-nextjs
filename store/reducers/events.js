import { SET_EVENTS_ALL } from "../actions/events";


const eventsReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_EVENTS_ALL:
            return {
                all: action.events
            }
        default:
            return state;
    }
}

export default eventsReducer;
