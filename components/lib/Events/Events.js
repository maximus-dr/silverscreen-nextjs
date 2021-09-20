import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getComponent } from '../../../core/functions/common/components';
import { getFilters, filter } from '../../../core/functions/common/filters';

import EventCard from './EventCard/EventCard';
import { EventsComponent } from './EventsStyled';

const events = [
    {
        id: 'boss_molokosos-2',
        filters: [
            '#city;minsk', '#city;grodno', '#shedule;now', '#date;2021-10-04', '#date;2021-10-05', '#cinema;moon', '#cinema;voka', '#cinema;arena', '#showTime;07:00-11:59',
            '#showTime;12:00-16:59', '#genre;cartoon', '#genre;family', '#genre;comedy', '#videotype;2d', '#videotype;3d', '#audiotype;dolbyDigital', '#auditorium;voka',
            '#auditorium;resto'
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png'
    },

    {
        id: 'sovry_mne_pravdu',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#date;2021-10-06', '#cinema;arena', '#showTime;12:00-16:59', '#showTime;17:00-21:59', '#showTime;22:00-06:59',
            '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbyDigital', '#auditorium;voka', '#auditorium;vip'
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png'
    },

    {
        id: 'petrovy_v_grippe',
        filters: [
            '#city;minsk', '#city;grodno', '#genre;drama', '#shedule;now', '#genre;fantastic', '#date;2021-10-04', '#date;2021-10-05', '#cinema;moon', '#cinema;voka',
            '#cinema;arena', '#showTime;12:00-16:59', '#showTime;17:00-21:59', '#videotype;2d', '#videotype;screenX', '#audiotype;dolbyAtmos', '#auditorium;vip',
            '#auditorium;vegasLounge', '#auditorium;voka', '#auditorium;resto',
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png'
    },

    {
        id: 'dune',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#date;2021-10-06', '#cinema;voka', '#showTime;12:00-16:59', '#showTime;17:00-21:59', '#showTime;22:00-06:59',
            '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;2d', '#videotype;2d4k', '#videotype;screenX', '#audiotype;dolbyAtmos', '#auditorium;vip',
            '#auditorium;vegasLounge', '#auditorium;voka',
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png'
    }
];

const shows = [
    {
        id: 'show01',
        eventId: 'boss_molokosos-2',
        filters: ['#city;grodno', '#genre;cartoon', '#shedule;now', '#cinema;moon']
    },
    {
        id: 'show02',
        eventId: 'boss_molokosos-2',
        filters: ['#city;minsk', '#genre;cartoon', '#shedule;now', '#cinema;voka']
    },
    {
        id: 'show03',
        eventId: 'boss_molokosos-2',
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
        filters: ['#city;grodno', '#genre;drama', '#shedule;now', '#cinema;moon']
    },

]


export default function Events(props) {

    const {state} = props;
    const id = props.componentData.id;
    const {componentsData} = state.document;
    const componentData = getComponent(componentsData, id);

    const filters = state.filters;


    const tags = getFilters(filters);
    const filteredEvents = filter(events, tags);
    const filteredShows = filter(shows, tags);


    return (
        <EventsComponent
            id={id}
            componentData={componentData}
        >
            <div style={{padding: '5px 15px'}}><h3>Events</h3></div>
            <div style={{display: 'inline-flex', flexWrap: 'wrap'}}>
                {filteredEvents && filteredEvents.map(event => {
                    return (
                        <EventCard key={event.id} event={event} />
                    );
                })}
            </div>
        </EventsComponent>
    )
}
