import React from 'react'

const tags = ['#city;minsk', '#city;grodno', '#genre;comedy', '#genre;drama'];

const events = [
    {
        id: 'dusha',
        filters: ['#city;grodno', '#genre;cartoon']
    },

    {
        id: 'sovry_mne_pravdu',
        filters: ['#city;minsk', '#genre;comedy']
    },

    {
        id: 'petrovy_v_grippe',
        filters: ['#city;minsk', '#genre;drama']
    }
];

const shows = [
    {
        id: 'show01',
        eventId: 'dusha',
        filters: ['#city;grodno', '#genre;cartoon']
    },
    {
        id: 'show02',
        eventId: 'petrovy_v_grippe',
        filters: ['#city;minsk', '#genre;drama']
    }
]



export default function Filters() {


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
        const categories = Object.keys(filters);
        const filtered = [];

        categories.forEach((category, i) => {

            const filter = filters[category];
            const multiple = filter.length > 1;

            if (i === 0) {
                if (!multiple) {
                    items.forEach(item => {
                        if (item.filters.includes(filter[0])) {
                            filtered.push(item);
                        }
                    })
                }

                if (multiple) {
                    const match = filter.some(value => {
                        let match = false;
                        items.forEach(item => {
                            if (item.filters.includes(value)) {
                                match = true;
                            }
                        });
                        return match;
                    });
                    console.log('match', match);
                }
            }
        });
        console.log('filtered', filtered);
        return filtered;
    }

    const filters = getFilters(tags);
    const filteredEvents = filter(events, filters);


    return (
        <>
            <div>
                Filters v.2
            </div>
            <hr></hr>
            <div>
                <div style={{padding: '15px', fontWeight: 'bold'}}>Filtered events:</div>
                {filteredEvents.map(event => (
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
        </>
    )
}
