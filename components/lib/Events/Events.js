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
    const date = eventFilters ? eventFilters.date : null;


    const filterEvents = (events, filters) => {
        if (!filters) return [];
        const categories = Object.keys(filters);
        const filtered = new Set;

        categories.forEach((category, i) => {
            const filter = filters[category];
            if (i === 0) {
                events.forEach(event => {
                    if (!event.eventFilters[category]) return;
                    if (event.eventFilters[category].includes(filter)) {
                        filtered.add(event);
                    }
                });
            }

            if (i > 0) {
                filtered.forEach(event => {
                    if (!event.eventFilters[category]) return;
                    if (!event.eventFilters[category].includes(filter)) {
                        filtered.delete(event);
                    }
                })
            }
        });
        return [...filtered];
    }

    const filterShow = (show, filters) => {
        const categories = Object.keys(filters);

        return categories.some(category => {
            if (filters[category] === 'all') return true;
            const filter = filters[category];
            return show.showFilters[category].includes(filter);
        });
    }

    const filterShowList = (showList, filters, date) => {
        if (!showList[date]) return false;
        return showList[date].some(show => {
            return filterShow(show, filters);
        })
    }


    const cards = filteredEvents
        ? filteredEvents.map(item => {
            return <EventCard key={item.id} event={item} />
        })
        : null;

    useEffect(() => {
        dispatch(setEventFilter('city', 'minsk'));
        dispatch(setEventFilter('shedule', 'now'));
        dispatch(setEventFilter('date', '2021-09-10'));
        dispatch(setShowFilter('cinema', 'all'));
    }, [dispatch]);

    useEffect(() => {
        if (eventFilters) {
            let filtered = filterEvents(events, eventFilters);
            if (showFilters && filtered.length > 0) {
                filtered = filtered.filter(item => filterShowList(item.showList, showFilters, date));
            }
            dispatch(setFilteredEvents(filtered));
        }
    }, [dispatch, events, eventFilters, showFilters, date])


    return (
        <EventsWrapper>
            {cards}
        </EventsWrapper>
    )
}
