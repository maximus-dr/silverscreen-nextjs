const SET_EVENT_FILTER = 'SET_EVENT_FILTER';
const SET_SHOW_FILTER = 'SET_SHOW_FILTER';
const UNSET_EVENT_FILTER = 'UNSET_EVENT_FILTER';
const SET_DATE = 'SET_DATE';


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

const setDate = (date) => ({
    type: SET_DATE,
    date
});


export {
    setEventFilter,
    setShowFilter,
    unsetEventFilter,
    setDate
}

export {
    SET_EVENT_FILTER,
    SET_SHOW_FILTER,
    UNSET_EVENT_FILTER,
    SET_DATE
}
