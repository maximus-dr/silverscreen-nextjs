const SET_EVENT_FILTER = 'SET_EVENT_FILTER';

const setEventFilter = (category, filter) => {
    return {
        type: SET_EVENT_FILTER,
        category,
        filter
    }
}

export {
    setEventFilter
}

export {
    SET_EVENT_FILTER
}
