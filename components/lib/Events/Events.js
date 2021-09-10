import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setFilteredEvents } from '../../../store/actions/events';
import { setEventFilter, setShowFilter } from '../../../store/actions/filters';
import EventCard from './EventCard/EventCard';
import { EventsWrapper } from './EventsStyled'


export default function Events(props) {

    const {state} = props;
    const events = state.events.all;
    const filteredEvents = state.events.filtered;
    const eventFilters = state.filters.events;
    const showFilters = state.filters.shows;
    const dispatch = useDispatch();


    const filterEvents = (events, filters) => {
        if (!filters) return [];
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

    const filterShows = (events, filters) => {
        const filtered = new Set;
        const categories = Object.keys(filters);

        categories.forEach((category, i) => {
            const filter = filters[category];
            if (i === 0) {
                events.forEach(event => {
                    console.log(event.showList)
                })
            }
        });
    }





    const cards = filteredEvents
        ? filteredEvents.map(item => {
            return <EventCard key={item.id} event={item} />
        })
        : null;

    useEffect(() => {
        dispatch(setEventFilter('city', 'minsk'));
        dispatch(setEventFilter('shedule', 'now'));
        dispatch(setShowFilter('cinema', 'all'));
    }, [dispatch]);

    useEffect(() => {
        if (eventFilters) {
            const filtered = filterEvents(events, eventFilters);
            if (showFilters) {
                filterShows(filtered, showFilters);
            }
            dispatch(setFilteredEvents(filtered));
        }
    }, [dispatch, events, eventFilters, showFilters])


    return (
        <EventsWrapper>
            {cards}
        </EventsWrapper>
    )
}
