import React, { useEffect } from 'react'
import EventCard from './EventCard/EventCard';
import { EventsWrapper } from './EventsStyled'


export default function Events(props) {

    const {state} = props;
    const events = state.events.all;
    const filters = state.filters;

    const filterEvents = (events, filters) => {
        const filterEntries = Object.entries(filters);
        const filtered = [];
        filterEntries.forEach(item => {
            const key = item[0];
            const value = item[1];

            events.forEach(event => {
                if (event.eventFilters[key].includes(value)) {
                    filtered.push(event);
                }
            })
        });
        return filtered;
    }

    const filteredEvents = filterEvents(events, filters);


    const cards = filteredEvents.map(item => {
        return <EventCard key={item.id} event={item} />
    })

    return (
        <EventsWrapper>
            {cards}
        </EventsWrapper>
    )
}
