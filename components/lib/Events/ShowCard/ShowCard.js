import React from 'react'
import { ShowCardWrapper, ShowColumn, ShowPoster, ShowTag, ShowTagsGroup, ShowTitle } from './ShowCardStyled';



export default function ShowCard(props) {

    const {show} = props;
    const {filters} = show;

    const getTagsGroup = (filters, tag) => {
        if (!filters) return [];
        return filters.filter(filter => filter.includes(tag));
    }

    const renderShowTags = (tags) => {
        if (!tags || tags.length === 0) return;
        return (
            <ShowTagsGroup>
                {tags.map(tag => {
                    return (
                        <ShowTag key={tag}>{tag}</ShowTag>
                    );
                })}
            </ShowTagsGroup>
        );
    }

    const cityTags = getTagsGroup(filters, '#city;');
    const sheduleTags = getTagsGroup(filters, '#shedule;');
    const dateTags = getTagsGroup(filters, '#date;');
    const cinemaTags = getTagsGroup(filters, '#cinema;');
    const showTimeTags = getTagsGroup(filters, '#showtime;');
    const genreTags = getTagsGroup(filters, '#genre;');
    const videoTypeTags = getTagsGroup(filters, '#videotype;');
    const audioTypeTags = getTagsGroup(filters, '#audiotype;');
    const auditoriumTags = getTagsGroup(filters, '#auditorium;');


    return (
        <ShowCardWrapper>
            <ShowPoster src={show.posterLink} />
            <ShowColumn>
                <ShowTitle><b>eventID:</b> {show.eventId}</ShowTitle>
                {renderShowTags(cityTags)}
                {renderShowTags(sheduleTags)}
                {renderShowTags(dateTags)}
                {renderShowTags(cinemaTags)}
                {renderShowTags(showTimeTags)}
                {renderShowTags(genreTags)}
                {renderShowTags(videoTypeTags)}
                {renderShowTags(audioTypeTags)}
                {renderShowTags(auditoriumTags)}
            </ShowColumn>
        </ShowCardWrapper>
    )
}
