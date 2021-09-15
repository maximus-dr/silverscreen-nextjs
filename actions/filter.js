import { setMultipleShowFilter, unsetMultipleShowFilter } from "../store/actions/filters";


export const filterActions = {

    admin: {
        onClick(e, params) {
            const {state, dispatch, settings} = params;
            const showFilters = state.filters.shows;
            const {category, value} = settings;

            if (showFilters && showFilters[category] && showFilters[category].includes(value)) {
                dispatch(unsetMultipleShowFilter(category, value));
                return;
            }
            dispatch(setMultipleShowFilter(category, value));
        },

        checkIsActive(e, params) {
            const {state, settings} = params;
            return state.filters.shows && state.filters.shows[settings.category] && state.filters.shows[settings.category].includes(settings.value);
        }
    }
}
