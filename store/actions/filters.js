const SET_FILTER = 'SET_FILTER';

const setFilter = (category, filter) => {
    return {
        type: SET_FILTER,
        category,
        filter
    }
}

export {
    setFilter
}

export {
    SET_FILTER
}
