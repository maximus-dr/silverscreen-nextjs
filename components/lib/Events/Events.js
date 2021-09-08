import React from 'react'
import EventCard from './EventCard/EventCard';
import { EventsWrapper } from './EventsStyled'


export default function Events(props) {

    const {state} = props;
    const events = state.events;
    const filters = state.filters;

    const filterEvents = (events, filters) => {

    }

    const cards = events.all.map(item => {
        return <EventCard key={item.id} event={item} />
    })

    return (
        <EventsWrapper>
            Events
            {cards}
        </EventsWrapper>
    )
}
