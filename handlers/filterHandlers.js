import { clearFilters, setFilter, setMultipleFilter } from "../store/actions/filters";


export const filterHandlers = {

    onClick(e, params) {
        const {settings, dispatch} = params;
        if (settings.multiple) {
            dispatch(setMultipleFilter(settings.value));
            return;
        }
        dispatch(setFilter(settings.value));
    },

    checkIsActive(e, params) {

    },

    onClearFilters(e, params) {
        const {dispatch} = params;
        dispatch(clearFilters());
    }
}
