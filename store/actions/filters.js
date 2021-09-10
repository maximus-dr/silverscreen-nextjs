const SET_EVENT_FILTER = 'SET_EVENT_FILTER';
const SET_SHOW_FILTER = 'SET_SHOW_FILTER';


const setEventFilter = (category, filter) => ({
    type: SET_EVENT_FILTER,
    category,
    filter
});

const setShowFilter = (category, filter) => ({
    type: SET_SHOW_FILTER,
    category,
    filter
});

export {
    setEventFilter,
    setShowFilter
}

export {
    SET_EVENT_FILTER,
    SET_SHOW_FILTER
}
