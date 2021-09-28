import { clearFilters, setFilter, setMultipleFilter } from "../store/actions/filters";
import { parseTagCategory, parseTagValue } from "../store/reducers/filters";


export const filterHandlers = {

    onClick(e, params) {
        const {settings, dispatch, state} = params;
        const {value, isMultiple} = settings;

        if (settings.type === 'clear') {
            dispatch(clearFilters());
            return;
        }
        dispatch(setFilter(value, isMultiple));
    },

    checkIsActive(e, params) {
        const {state, settings} = params;
        const {value} = settings;
        const {filters} = state;
        const filterCategory = parseTagCategory(value);
        const filterValue = parseTagValue(value);
        const showAll = filterValue === 'all' && !filters.find(item => item.includes(filterCategory));

        if (showAll) {
            return true;
        }
        return state.filters.includes(value);
    }
}
