const CLEAR_FILTERS = 'CLEAR_FILTERS';
const SET_FILTER = 'SET_FILTER';
const SET_MULTIPLE_FILTER = 'SET_MULTIPLE_FILTER';
const UNSET_MULTIPLE_FILTER = 'UNSET_MULTIPLE_FILTER';


const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

const setMultipleFilter = (filter) => ({
    type: SET_MULTIPLE_FILTER,
    filter
});

const unsetMultipleFilter = (filter) => ({
    type: UNSET_MULTIPLE_FILTER,
    filter
});

const clearFilters = () => ({
    type: CLEAR_FILTERS
});


export {
    setFilter,
    setMultipleFilter,
    clearFilters,
    unsetMultipleFilter
}

export {
    SET_FILTER,
    SET_MULTIPLE_FILTER,
    UNSET_MULTIPLE_FILTER,
    CLEAR_FILTERS
}
