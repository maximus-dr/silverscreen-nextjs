import React from 'react'
import { generateNewId, getComponent } from '../../../../core/functions/common/components';
import Section from '../../Section/Section';
import { EventCardComponent, EventPoster } from './EventCardStyled'

const posterData = (link) => {
    const id = generateNewId(10);
    return {
        typeName: 'section',
        id,
        name: 'Постер',
        styles: {
            common: {
                backgroundImage: `url(${link})`
            }
        },
        childrenList: []
    }
}


export default function EventCard(props) {

    const {children, state, event, id} = props;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;

    const poster = posterData(event.link);


    return (
        <EventCardComponent
            id={id}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
        >
            <EventPoster link={event.posterLink} />
        </EventCardComponent>
    )
}
