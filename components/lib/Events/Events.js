import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setFilteredEvents } from '../../../store/actions/events';
import { setDate, setEventFilter, setShowFilter } from '../../../store/actions/filters';
import EventCard from './EventCard/EventCard';
import { EventsWrapper } from './EventsStyled'


export default function Events(props) {

    const {state} = props;
    const events = state.events.all;
    const filteredEvents = state.events.filtered;
    const eventFilters = state.filters.events;
    const showFilters = state.filters.shows;
    const dispatch = useDispatch();
    const date = state.filters.date;


    const filterEvents = (events, filters, date) => {
        if (!filters) return [];
        const categories = Object.keys(filters);
        const filtered = new Set;

        events.forEach(event => {
            if (Object.keys(event.showList).includes(date)) {
                filtered.add(event);
            }
        })

        categories.forEach((category) => {
            const filter = filters[category];
            const isMultiple = Array.isArray(filter);

            if (isMultiple) {
                filtered.forEach(event => {
                    const hasCategory = event.eventFilters[category];
                    if (!hasCategory) {
                        filtered.delete(event);
                        return;
                    }
                    const match = filter.some(value => (
                            event.eventFilters[category].includes(value)
                        )
                    );
                    if (!match) filtered.delete(event);
                })
            }

            if (!isMultiple) {
                filtered.forEach(event => {
                    const selectAll = filter === 'all';
                    const hasCategory = event.eventFilters[category];
                    const hasFilter = hasCategory && hasCategory.includes(filter);

                    if (selectAll) return;
                    if (!hasFilter || !hasCategory) {
                        filtered.delete(event);
                    }
                });
            }


        });
        return [...filtered];
    }

    const filterShow = (show, filters) => {
        const categories = Object.keys(filters);
        const mismatch = categories.some(category => {
            const showFilter = show.showFilters[category];

            if (filters[category] === 'all') return false;
            if (!showFilter) return true;
            return (
                !showFilter.includes(filters[category])
            );
        });
        return !mismatch;
    }

    const filterShowList = (showList, filters, date) => {
        if (!showList[date]) return false;
        return showList[date].some(show => filterShow(show, filters));
    }


    const cards = filteredEvents
        ? filteredEvents.map(item => {
            return <EventCard key={item.id} event={item} />
        })
        : null;

    useEffect(() => {
        dispatch(setEventFilter('city', 'minsk'));
        dispatch(setEventFilter('shedule', 'now'));
        dispatch(setDate('2021-09-10'));
        dispatch(setShowFilter('cinema', 'all'));
    }, [dispatch]);

    useEffect(() => {
        if (eventFilters) {
            let filtered = filterEvents(events, eventFilters, date);
            if (showFilters && filtered.length > 0) {
                filtered = filtered.filter(item => {
                    return filterShowList(item.showList, showFilters, date);
                });
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
