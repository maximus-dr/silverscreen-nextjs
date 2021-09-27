import React from 'react'
import { getComponent } from '../../../../core/functions/common/components';
import { EventCardComponent, EventGenre, EventPoster, EventRow, EventSubtitle, EventTag, EventTags, EventTechnologyIcon, EventTitle } from './EventCardStyled'


export default function EventCard(props) {

    const {children, state, event, id} = props;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;


    return (
        <EventCardComponent
            id={id}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
        >
            <EventPoster link={event.posterLink} />

            <EventRow>
                <EventTags>
                    <EventTag>
                        {event.ageLimit.acronym || null}
                    </EventTag>
                    {
                        event.language &&
                        event.language.map(item => (
                            <EventTag key={item.acronym}>
                                {item.acronym}
                            </EventTag>
                        ))
                    }
                </EventTags>
                    {
                        event.technology &&
                        event.technology.map(item => (
                            <EventTechnologyIcon
                                key={item.name}
                                src={item.icon}
                            />
                        ))
                    }
            </EventRow>

            <EventTitle>
                {event.acronym}
            </EventTitle>
            <EventSubtitle>
                {event.eventType.acronym} ●
                {event.genre.map(genre => <EventGenre key={genre.name}>{genre.acronym}</EventGenre>)}
            </EventSubtitle>
        </EventCardComponent>
    )
}
