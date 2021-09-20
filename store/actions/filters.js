const CLEAR_FILTERS = 'CLEAR_FILTERS';
const SET_FILTER = 'SET_FILTER';


const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

const clearFilters = () => ({
    type: CLEAR_FILTERS
});


export {
    setFilter,
    clearFilters
}

export {
    SET_FILTER,
    CLEAR_FILTERS
}
