import React from 'react'
import { EventAcronym, EventAgeLimit, EventCardComponent, EventCity, EventGenre, EventLanguage, EventOverlay, EventPoster, EventShedule, TagsGroup } from './EventCardStyled';

export default function EventCard(props) {

    const {event} = props;
    const {filters} = event;

    const cityTags = filters.filter(tag => tag.includes('#city;'));
    const sheduleTags = filters.filter(tag => tag.includes('#shedule;'));
    const dateTags = filters.filter(tag => tag.includes('#date;'));
    const cinemaTags = filters.filter(tag => tag.includes('#cinema;'));
    const showTimeTags = filters.filter(tag => tag.includes('#showTime;'));
    const genreTags = filters.filter(tag => tag.includes('#genre;'));

    return (
        <EventCardComponent>
            <EventOverlay>

                <TagsGroup>
                    {cityTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

                <TagsGroup>
                    {sheduleTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

                <TagsGroup>
                    {dateTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

                <TagsGroup>
                    {cinemaTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

                <TagsGroup>
                    {showTimeTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

                <TagsGroup>
                    {genreTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

            </EventOverlay>
            <EventPoster link={event.posterLink || ''} />
        </EventCardComponent>
    );
}
