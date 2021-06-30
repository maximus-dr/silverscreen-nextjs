import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { FilmContainer, FilmImageContainer } from './FilmGalleryStyled';
import { FilmItem } from './FilmCardStyled';
import { SliderButton } from '../TestPage/TestPageStyled';


const FilmCard = (props) => {

    const {event} = props;

    return (
        <FilmItem>
            <FilmImageContainer>
                <Image 
                    src={event.posterLink}
                    alt={event.name}
                    width="240"
                    height="360"
                />
            </FilmImageContainer>
            <p>{event.ageLimit.acronym} / {event.language[0].acronym}</p>
            <h2>{event.name}</h2>
            <p>{event.genres.map(genre => genre.name)}</p>
            <SliderButton style={{marginTop: 'auto'}}>Купить билет</SliderButton>
        </FilmItem>
    );
}

export default function FilmGallery() {
    
    const events = useSelector(state => state.events);

    return (
        <>
            <FilmContainer>
                {events.map(event => {
                    return <FilmCard key={event.code} event={event} />
                })}
            </FilmContainer>
        </>
    )
}
