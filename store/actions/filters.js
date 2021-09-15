const SET_EVENT_FILTER = 'SET_EVENT_FILTER';
const SET_SHOW_FILTER = 'SET_SHOW_FILTER';
const UNSET_SHOW_FILTER = 'UNSET_SHOW_FILTER';
const UNSET_EVENT_FILTER = 'UNSET_EVENT_FILTER';
const SET_DATE = 'SET_DATE';
const SET_MULTIPLE_EVENT_FILTER = 'SET_MULTIPLE_EVENT_FILTER';
const UNSET_MULTIPLE_EVENT_FILTER = 'UNSET_MULTIPLE_EVENT_FILTER';
const SET_MULTIPLE_SHOW_FILTER = 'SET_MULTIPLE_SHOW_FILTER';
const UNSET_MULTIPLE_SHOW_FILTER = 'UNSET_MULTIPLE_SHOW_FILTER';
const CLEAR_FILTERS = 'CLEAR_FILTERS';


const setEventFilter = (category, filter) => ({
    type: SET_EVENT_FILTER,
    category,
    filter
});

const unsetEventFilter = (category) => ({
    type: UNSET_EVENT_FILTER,
    category
})

const setShowFilter = (category, filter) => ({
    type: SET_SHOW_FILTER,
    category,
    filter
});

const unsetShowFilter = (category, filter) => ({
    type: UNSET_SHOW_FILTER,
    category,
    filter
});

const setDate = (date) => ({
    type: SET_DATE,
    date
});

const setMultipleEventFilter = (category, value) => ({
    type: SET_MULTIPLE_EVENT_FILTER,
    category,
    value
});

const unsetMultipleEventFilter = (category, value) => ({
    type: UNSET_MULTIPLE_EVENT_FILTER,
    category,
    value
});

const setMultipleShowFilter = (category, value) => ({
    type: SET_MULTIPLE_SHOW_FILTER,
    category,
    value
});

const unsetMultipleShowFilter = (category, value) => ({
    type: UNSET_MULTIPLE_SHOW_FILTER,
    category,
    value
});

const clearFilters = () => ({
    type: CLEAR_FILTERS
});


export {
    setEventFilter,
    unsetEventFilter,
    setShowFilter,
    unsetShowFilter,
    setDate,
    setMultipleEventFilter,
    unsetMultipleEventFilter,
    setMultipleShowFilter,
    unsetMultipleShowFilter,
    clearFilters
}

export {
    SET_EVENT_FILTER,
    UNSET_EVENT_FILTER,
    SET_SHOW_FILTER,
    UNSET_SHOW_FILTER,
    SET_DATE,
    SET_MULTIPLE_EVENT_FILTER,
    UNSET_MULTIPLE_EVENT_FILTER,
    SET_MULTIPLE_SHOW_FILTER,
    UNSET_MULTIPLE_SHOW_FILTER,
    CLEAR_FILTERS
}
