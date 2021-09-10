const SET_EVENTS_ALL = 'SET_EVENTS_ALL';
const SET_EVENTS_FILTERED = 'SET_EVENTS_FILTERED';


const setEventsAll = (events) => ({
    type: SET_EVENTS_ALL,
    events
});

const setFilteredEvents = (filteredEvents) => ({
    type: SET_EVENTS_FILTERED,
    filteredEvents
})


export {
    setEventsAll,
    setFilteredEvents
}

export {
    SET_EVENTS_ALL,
    SET_EVENTS_FILTERED
}
