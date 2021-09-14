const SET_ALL_EVENTS = 'SET_ALL_EVENTS';
const SET_FILTERED_EVENTS = 'SET_FILTERED_EVENTS';


const setAllEvents = (events) => ({
    type: SET_ALL_EVENTS,
    events
});

const setFilteredEvents = (filteredEvents) => ({
    type: SET_FILTERED_EVENTS,
    filteredEvents
})


export {
    setAllEvents,
    setFilteredEvents
}

export {
    SET_ALL_EVENTS,
    SET_FILTERED_EVENTS
}
