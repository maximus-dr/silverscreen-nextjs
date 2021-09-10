import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setEventFilter } from '../../../store/actions/filters';
import EventCard from './EventCard/EventCard';
import { EventsWrapper } from './EventsStyled'


export default function Events(props) {

    const {state} = props;
    const events = state.events.all;
    const filters = state.filters.events;
    const dispatch = useDispatch();


    const filterEvents = (events, filters) => {
        if (!filters) return;
        const categories = Object.keys(filters);
        const filtered = new Set;

        categories.forEach((category, i) => {
            const filter = filters[category];
            if (i === 0) {
                events.forEach(event => {
                    if (event.eventFilters[category].includes(filter)) {
                        filtered.add(event);
                    }
                });
            }

            if (i > 0) {
                filtered.forEach(event => {
                    if (!event.eventFilters[category].includes(filter)) {
                        filtered.delete(event);
                    }
                })
            }
        });
        return [...filtered];
    }

    const filteredEvents = filterEvents(events, filters);



    const cards = filteredEvents.map(item => {
        return <EventCard key={item.id} event={item} />
    });

    useEffect(() => {
        dispatch(setEventFilter('city', 'minsk'));
        dispatch(setEventFilter('shedule', 'now'));
    }, [dispatch]);

    return (
        <EventsWrapper>
            {cards}
        </EventsWrapper>
    )
}
