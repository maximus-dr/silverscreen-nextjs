import { SET_DATE, SET_EVENT_FILTER, SET_MULTIPLE_EVENT_FILTER, SET_SHOW_FILTER, UNSET_EVENT_FILTER, UNSET_MULTIPLE_EVENT_FILTER } from "../actions/filters";


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

        case SET_DATE:
            return {
                ...state,
                date: action.date
            }

        case SET_MULTIPLE_EVENT_FILTER:
            const {category, value} = action;
            const hasCategory = state.events[category];
            const includesValue = hasCategory && state.events[category].includes(value);

            if (hasCategory && !includesValue) {
                return {
                    ...state,
                    events: {
                        ...state.events,
                        [category]: [...state.events[category], value]
                    }
                }
            }
            else {
                return {
                    ...state,
                    events: {
                        ...state.events,
                        [category]: [value]
                    }
                }
            }

        case UNSET_MULTIPLE_EVENT_FILTER:
            if (!state.events) return;
            if (!state.events[action.category]) return;

            const i = state.events[action.category].indexOf(action.value);

            if (i || i === 0) {
                const filtered = [...state.events[action.category]]
                filtered.splice(i, 1);

                if (filtered.length > 0) {
                    return {
                        ...state,
                        events: {
                            ...state.events,
                            [action.category]: filtered
                        }
                    }
                }

                if (filtered.length === 0) {
                    const events = {...state.events};
                    delete events[action.category];
                    return {
                        ...state,
                        events
                    }
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
