import React from 'react'
import { getComponent } from '../../../core/functions/common/components';
import { getFilters, filter } from '../../../core/functions/common/filters';
import EventCard from './EventCard/EventCard';
import { EventsComponent } from './EventsStyled';
import ShowCard from './ShowCard/ShowCard';
import Shows from './Shows/Shows';


const events = [
    {
        id: 'boss_molokosos-2',
        filters: [
            '#city;minsk', '#city;grodno', '#shedule;now', '#date;2021-10-04', '#date;2021-10-05', '#cinema;moon', '#cinema;voka', '#cinema;arena', '#showtime;07:00-11:59',
            '#showtime;12:00-16:59', '#genre;cartoon', '#genre;family', '#genre;comedy', '#videotype;2d', '#videotype;3d', '#audiotype;dolbydigital', '#auditorium;voka',
            '#auditorium;resto'
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png'
    },

    {
        id: 'sovry_mne_pravdu',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#date;2021-10-05', '#cinema;arena', '#showtime;12:00-16:59', '#showtime;17:00-21:59', '#showtime;22:00-06:59',
            '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbydigital', '#auditorium;voka', '#auditorium;vip'
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png'
    },

    {
        id: 'petrovy_v_grippe',
        filters: [
            '#city;minsk', '#city;grodno', '#genre;drama', '#shedule;now', '#genre;fantastic', '#date;2021-10-04', '#date;2021-10-05', '#cinema;moon', '#cinema;voka',
            '#cinema;arena', '#showtime;12:00-16:59', '#showtime;17:00-21:59', '#videotype;2d', '#videotype;screenx', '#audiotype;dolbyatmos', '#auditorium;vip',
            '#auditorium;vegaslounge', '#auditorium;voka', '#auditorium;resto',
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png'
    },

    {
        id: 'dune',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#date;2021-10-05', '#cinema;voka', '#cinema;arena', '#showtime;12:00-16:59', '#showtime;17:00-21:59', '#showtime;22:00-06:59',
            '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;2d', '#videotype;2d4k', '#videotype;screenx', '#audiotype;dolbyatmos', '#auditorium;vip',
            '#auditorium;vegaslounge', '#auditorium;voka',
        ],
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png'
    }
];

const shows = [
    {
        id: 'boss01',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;grodno', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;moon', '#date;2021-10-04', '#showtime;07:00-11:59', '#videotype;2d',
            '#audiotype;dolbydigital', '#auditorium;resto'
        ]
    },
    {
        id: 'boss02',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;grodno', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;moon', '#date;2021-10-04', '#showtime;12:00-16:59', '#videotype;3d',
            '#audiotype;dolbydigital', '#auditorium;voka'
        ]
    },
    {
        id: 'boss03',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;grodno', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;moon', '#date;2021-10-05', '#showtime;07:00-11:59', '#videotype;2d',
            '#audiotype;dolbydigital', '#auditorium;resto'
        ]
    },
    {
        id: 'boss04',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;grodno', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;moon', '#date;2021-10-05', '#showtime;12:00-16:59', '#videotype;3d',
            '#audiotype;dolbydigital', '#auditorium;voka'
        ]
    },
    {
        id: 'boss05',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;minsk', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;voka', '#date;2021-10-04', '#showtime;07:00-11:59', '#videotype;2d',
            '#audiotype;dolbydigital', '#auditorium;voka'
        ]
    },
    {
        id: 'boss06',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;minsk', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;arena', '#date;2021-10-04', '#showtime;12:00-16:59', '#videotype;3d',
            '#audiotype;dolbydigital', '#auditorium;voka'
        ]
    },
    {
        id: 'boss07',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;minsk', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;voka', '#date;2021-10-05', '#showtime;07:00-11:59', '#videotype;2d',
            '#audiotype;dolbydigital', '#auditorium;voka'
        ]
    },
    {
        id: 'boss08',
        eventId: 'boss_molokosos-2',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6403.png',
        filters: [
            '#city;minsk', '#genre;cartoon', '#genre;family', '#genre;comedy', '#shedule;now', '#cinema;arena', '#date;2021-10-05', '#showtime;12:00-16:59', '#videotype;3d',
            '#audiotype;dolbydigital', '#auditorium;voka'
        ]
    },
    {
        id: 'sovry01',
        eventId: 'sovry_mne_pravdu',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;arena', '#showtime;12:00-16:59', '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbydigital',
            '#auditorium;voka'
        ]
    },
    {
        id: 'sovry02',
        eventId: 'sovry_mne_pravdu',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;arena', '#showtime;17:00-21:59', '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbydigital',
            '#auditorium;vip'
        ]
    },
    {
        id: 'sovry03',
        eventId: 'sovry_mne_pravdu',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;arena', '#showtime;22:00-06:59', '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbydigital',
            '#auditorium;voka'
        ]
    },
    {
        id: 'sovry04',
        eventId: 'sovry_mne_pravdu',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;arena', '#showtime;12:00-16:59', '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbydigital',
            '#auditorium;voka'
        ]
    },
    {
        id: 'sovry05',
        eventId: 'sovry_mne_pravdu',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;arena', '#showtime;17:00-21:59', '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbydigital',
            '#auditorium;vip'
        ]
    },
    {
        id: 'sovry06',
        eventId: 'sovry_mne_pravdu',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6546.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;arena', '#showtime;22:00-06:59', '#genre;drama', '#genre;thriller', '#videotype;2d', '#audiotype;dolbydigital',
            '#auditorium;voka'
        ]
    },
    {
        id: 'petrovy01',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;voka', '#showtime;12:00-16:59', '#genre;drama', '#genre;fantastic', '#videotype;2d', '#audiotype;dolbyatmos',
            '#auditorium;voka'
        ]
    },
    {
        id: 'petrovy02',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;arena', '#showtime;17:00-21:59', '#genre;drama', '#genre;fantastic', '#videotype;screenx', '#audiotype;dolbyatmos',
            '#auditorium;vegaslounge'
        ]
    },
    {
        id: 'petrovy03',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;voka', '#showtime;12:00-16:59', '#genre;drama', '#genre;fantastic', '#videotype;2d', '#audiotype;dolbyatmos',
            '#auditorium;vip'
        ]
    },
    {
        id: 'petrovy04',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;arena', '#showtime;17:00-21:59', '#genre;drama', '#genre;fantastic', '#videotype;screenx', '#audiotype;dolbyatmos',
            '#auditorium;vip'
        ]
    },
    {
        id: 'petrovy05',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;grodno', '#shedule;now', '#date;2021-10-04', '#cinema;moon', '#showtime;12:00-16:59', '#genre;drama', '#genre;fantastic', '#videotype;2d', '#audiotype;dolbyatmos',
            '#auditorium;resto'
        ]
    },
    {
        id: 'petrovy06',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;grodno', '#shedule;now', '#date;2021-10-04', '#cinema;moon', '#showtime;17:00-21:59', '#genre;drama', '#genre;fantastic', '#videotype;screenx', '#audiotype;dolbyatmos',
            '#auditorium;vip'
        ]
    },
    {
        id: 'petrovy07',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;grodno', '#shedule;now', '#date;2021-10-05', '#cinema;moon', '#showtime;12:00-16:59', '#genre;drama', '#genre;fantastic', '#videotype;2d', '#audiotype;dolbyatmos',
            '#auditorium;resto'
        ]
    },
    {
        id: 'petrovy08',
        eventId: 'petrovy_v_grippe',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6523.png',
        filters: [
            '#city;grodno', '#shedule;now', '#date;2021-10-05', '#cinema;moon', '#showtime;17:00-21:59', '#genre;drama', '#genre;fantastic', '#videotype;screenx', '#audiotype;dolbyatmos',
            '#auditorium;vip'
        ]
    },
    {
        id: 'dune01',
        eventId: 'dune',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;arena', '#showtime;12:00-16:59', '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;2d', '#audiotype;dolbyatmos',
            '#auditorium;voka'
        ]
    },
    {
        id: 'dune02',
        eventId: 'dune',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;arena', '#showtime;17:00-21:59', '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;2d4k', '#audiotype;dolbyatmos',
            '#auditorium;vip'
        ]
    },
    {
        id: 'dune03',
        eventId: 'dune',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-04', '#cinema;voka', '#showtime;22:00-06:59', '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;screenx', '#audiotype;dolbyatmos',
            '#auditorium;vegaslounge'
        ]
    },
    {
        id: 'dune04',
        eventId: 'dune',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;arena', '#showtime;12:00-16:59', '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;2d', '#audiotype;dolbyatmos',
            '#auditorium;voka'
        ]
    },
    {
        id: 'dune05',
        eventId: 'dune',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;arena', '#showtime;17:00-21:59', '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;2d4k', '#audiotype;dolbyatmos',
            '#auditorium;vip'
        ]
    },
    {
        id: 'dune06',
        eventId: 'dune',
        posterLink: 'https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png',
        filters: [
            '#city;minsk', '#shedule;now', '#date;2021-10-05', '#cinema;arena', '#showtime;22:00-06:59', '#genre;drama', '#genre;fantastic', '#genre;adventure', '#videotype;screenx', '#audiotype;dolbyatmos',
            '#auditorium;vegaslounge'
        ]
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
            <div style={{padding: '5px 50px'}}><h3>Events</h3></div>
            <div style={{display: 'inline-flex', flexWrap: 'wrap', paddingLeft: '15px'}}>
                {filteredEvents && filteredEvents.map(event => {
                    return (
                        <EventCard key={event.id} event={event} />
                    );
                })}
            </div>

            <Shows>
                <div style={{padding: '5px 50px'}}><h3>Shows</h3></div>
                <div style={{display: 'inline-flex', flexWrap: 'wrap', paddingLeft: '25px', paddingRight: '25px'}}>
                    {filteredShows && filteredShows.map(show => {
                        return (
                            <ShowCard key={show.id} show={show} />
                        );
                    })}
                </div>
            </Shows>
        </EventsComponent>
    )
}
