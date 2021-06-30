import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux';


const FilmCard = (props) => {

    const {event} = props;

    return (
        <div>
            <div>
                <Image 
                    src={event.posterLink}
                    alt={event.name}
                    width="240"
                    height="360"
                />
            </div>
            <p>{event.ageLimit.acronym} / {event.language[0].acronym}</p>
            <h2>{event.name}</h2>
            <p>{event.genres.map(genre => genre.name)}</p>
            <button>Купить билет</button>
        </div>
    );
}

export default function FilmGallery() {

    const events = useSelector(state => state.events);

    return (
        <div>
            <h2>FilmGallery</h2>
            <div>
                {events.map(event => {
                    return <FilmCard key={event.code} event={event} />
                })}
            </div>
        </div>
    )
}
