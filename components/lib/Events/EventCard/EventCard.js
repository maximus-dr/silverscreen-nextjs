import React from 'react'
import { EventAcronym, EventAgeLimit, EventCardComponent, EventGenre, EventLanguage, EventPoster } from './EventCardStyled';

export default function EventCard(props) {

    const {event} = props;
    const language =  event.eventFilters.language.map(item => (
        <EventLanguage key={item}>
            {item.toUpperCase()}
        </EventLanguage>)
    );
    const genres = event.eventFilters.genres.map(item => (
        <EventGenre key={item}>
            {item}
        </EventGenre>)
    );

    return (
        <EventCardComponent>
            <EventPoster event={event} />
            <EventAgeLimit>
                {event.ageLimit.acronym}
            </EventAgeLimit>
            {language}
            <EventAcronym>
                {event.acronym}
            </EventAcronym>
            {genres}
        </EventCardComponent>
    );
}
