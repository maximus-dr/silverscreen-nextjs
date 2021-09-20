import React from 'react'
import { useSelector } from 'react-redux';

// const tags = ['#city;minsk', '#genre;comedy', '#genre;drama', '#city;vitebsk', '#city;grodno'];

const events = [
    {
        id: 'dusha',
        filters: ['#city;grodno', '#genre;cartoon', '#shedule;now']
    },

    {
        id: 'sovry_mne_pravdu',
        filters: ['#city;minsk', '#genre;comedy', '#shedule;now']
    },

    {
        id: 'petrovy_v_grippe',
        filters: ['#city;minsk', '#city;grodno', '#genre;drama', '#shedule;now', '#genre;fantastic']
    },

    {
        id: 'duna',
        filters: ['#city;vitebsk', '#shedule;now']
    }
];

const shows = [
    {
        id: 'show01',
        eventId: 'dusha',
        filters: ['#city;grodno', '#genre;cartoon', '#shedule;now', '#cinema;moon']
    },
    {
        id: 'show02',
        eventId: 'dusha',
        filters: ['#city;minsk', '#genre;cartoon', '#shedule;now', '#cinema;voka']
    },
    {
        id: 'show03',
        eventId: 'dusha',
        filters: ['#city;minsk', '#genre;cartoon', '#shedule;now', '#cinema;arena']
    },
    {
        id: 'show04',
        eventId: 'petrovy_v_grippe',
        filters: ['#city;minsk', '#genre;drama', '#shedule;now', '#cinema;voka']
    },
    {
        id: 'show05',
        eventId: 'petrovy_v_grippe',
        filters: ['#city;minsk', '#genre;drama', '#shedule;now', '#cinema;arena']
    },
    {
        id: 'show06',
        eventId: 'petrovy_v_grippe',
        filters: ['#city;grodno', '#genre;drama', '#shedule;now', '#cinema;trinity']
    },

]



export default function Filters2() {

    const state = useSelector(state => state);
    const tags = state.filters;



    const getFilters = (tags) => {
        const filters = {}
        tags.forEach(tag => {
            const splitted = tag.split(';');
            const key = splitted[0];

            if (!filters[key]) {
                filters[key] = [tag];
                return;
            }
            if (filters[key]) {
                filters[key].push(tag);
                return;
            }
        });
        return filters;
    }


    const filter = (items, filters) => {
        if (Object.keys(filters).length === 0) return items;

        const categories = Object.keys(filters);
        let filtered = [];

        categories.forEach((category, i) => {

            const filterValues = filters[category];
            const multiple = filterValues.length > 1;

            if (i === 0) {
                if (!multiple) {
                    items.forEach(item => {
                        if (item.filters.includes(filterValues[0])) {
                            filtered.push(item);
                        }
                    })
                }

                if (multiple) {
                    items.forEach((item) => {
                        const match = filterValues.some(value => {
                            return item.filters.includes(value);
                        });
                        if (match) {
                            filtered.push(item);
                        }
                    });
                }
            }

            if (i > 0) {
                if (!multiple) {
                    filtered = filtered.filter(item => {
                        return item.filters.includes(filterValues[0]);
                    });
                }

                if (multiple) {
                    filtered = filtered.filter(item => {
                        const match = filterValues.some(value => {
                            return item.filters.includes(value);
                        });
                        return match ? true : false;
                    });
                }
            }
        });
        return filtered;
    }

    const filters = getFilters(tags);
    const filteredEvents = filter(events, filters);
    const filteredShows = filter(shows, filters);


    return (
        <>
            <div>
                Filters v.2
            </div>
            <hr></hr>
            <div>
                <div style={{padding: '15px', fontWeight: 'bold'}}>Tags:</div>
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    {
                        tags.map(tag => <span key={tag} style={{padding: '5px 10px'}}>{tag}</span>)
                    }
                </div>

                <div style={{padding: '15px', fontWeight: 'bold'}}>Filtered events:</div>
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    {filteredEvents.map(event => (
                        <div key={event.id} style={{border: '1px dashed #000000', display: 'inline-block', padding: '15px', marginRight: '15px'}}>
                            <div style={{paddingBottom: '5px'}}><b>Event</b></div>
                            <span>id: </span>{event.id}
                            <div style={{paddingTop: '15px'}}>
                                {event.filters.map(filter => (
                                    <div key={filter} >
                                        {filter}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{padding: '15px', fontWeight: 'bold'}}>Filtered shows:</div>
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    {filteredShows.map(show => (
                        <div key={show.id} style={{border: '1px dashed #000000', display: 'inline-block', padding: '15px', marginRight: '15px'}}>
                            <div style={{paddingBottom: '5px'}}><b>Show</b></div>
                            <div><span>id: </span>{show.id}</div>
                            <div><span>showId: </span>{show.eventId}</div>
                            <div style={{paddingTop: '15px'}}>
                                {show.filters.map(filter => (
                                    <div key={filter} >
                                        {filter}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{padding: '15px', fontWeight: 'bold'}}>All events:</div>
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    {events.map(event => (
                        <div key={event.id} style={{border: '1px dashed #000000', display: 'inline-block', padding: '15px', marginRight: '15px'}}>
                            {event.id}
                            <div style={{paddingTop: '15px'}}>
                                {event.filters.map(filter => (
                                    <div key={filter} >
                                        {filter}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
