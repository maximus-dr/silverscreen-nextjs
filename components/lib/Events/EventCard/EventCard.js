import React from 'react'
import { EventCardComponent, EventId, EventOverlay, EventPoster, TagsGroup } from './EventCardStyled';



export default function EventCard(props) {

    const {event} = props;
    const {filters} = event;

    const cityTags = filters.filter(tag => tag.includes('#city;'));
    const sheduleTags = filters.filter(tag => tag.includes('#shedule;'));
    const dateTags = filters.filter(tag => tag.includes('#date;'));
    const cinemaTags = filters.filter(tag => tag.includes('#cinema;'));
    const showTimeTags = filters.filter(tag => tag.includes('#showtime;'));
    const genreTags = filters.filter(tag => tag.includes('#genre;'));
    const videoTypeTags = filters.filter(tag => tag.includes('#videotype;'));
    const audioTypeTags = filters.filter(tag => tag.includes('#audiotype;'));
    const auditoriumTags = filters.filter(tag => tag.includes('#auditorium;'));

    return (
        <EventCardComponent>
            <EventOverlay>
                <EventId>id: {event.id}</EventId>

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

                <TagsGroup>
                    {videoTypeTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

                <TagsGroup>
                    {audioTypeTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

                <TagsGroup>
                    {auditoriumTags.map(tag => <div key={tag}>{tag}</div>)}
                </TagsGroup>

            </EventOverlay>
            <EventPoster link={event.posterLink || ''} />
        </EventCardComponent>
    );
}
