import React from 'react'
import { generateNewId, getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
import EventCard from '../../Cards/EventCard/EventCard';
import { EventsContainerComponent } from './EventsContainerStyled'



export default function EventsContainer(props) {

    const {children, state} = props;
    const {filters, data} = state;
    const {events} = data;
    const {id} = props.componentData;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;

    const currentFilters = groupFilters(filters);
    const filteredData = filterData(data, currentFilters);
    const filteredEvents = filteredData.events;


    return (
        <EventsContainerComponent
            id={id}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
        >
            {filteredEvents && filteredEvents.map(event => {
                const cardId = generateNewId(10);
                return (
                    <EventCard id={cardId} key={event.id} event={event} state={state} />
                );
            })}
            {children}
        </EventsContainerComponent>
    )
}
