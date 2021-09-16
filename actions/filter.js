import { setMultipleEventFilter, setMultipleShowFilter, unsetMultipleEventFilter, unsetMultipleShowFilter } from "../store/actions/filters";


export const filterActions = {

    admin: {
        onClick(e, params) {
            if (!params) return;
            const {state, dispatch, settings} = params;
            const {category, value, type} = settings;

            if (type && type === 'show') {
                const showFilters = state.filters.shows;
                if (showFilters && showFilters[category] && showFilters[category].includes(value)) {
                    dispatch(unsetMultipleShowFilter(category, value));
                    return;
                }
                dispatch(setMultipleShowFilter(category, value));
            }

            if (type && type === 'event') {
                const eventFilers = state.filters.events;
                if (eventFilers && eventFilers[category] && eventFilers[category].includes(value)) {
                    dispatch(unsetMultipleEventFilter(category, value));
                    return;
                }
                dispatch(setMultipleEventFilter(category, value));
            }
        },

        checkIsActive(e, params) {
            const {state, settings} = params;
            const {type, category, value} = settings;

            if (type && type === 'show') {
                return state.filters.shows && state.filters.shows[category] && state.filters.shows[category].includes(value);
            }

            if (type && type === 'event') {
                return state.filters.events && state.filters.events[category] && state.filters.events[category].includes(value);
            }
        }
    }
}
