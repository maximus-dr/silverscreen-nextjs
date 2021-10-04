import React from 'react'
import { useDispatch } from 'react-redux';
import {  getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
import { renderComponents } from '../../../../core/functions/render';
import { getHandler } from '../../../../handlers';
import EmptyEvent from './EmptyEvent/EmptyEvent';
import { EventsContainerComponent } from './EventsContainerStyled'



export default function EventsContainer(props) {

    const {children, state} = props;
    const {filters, data} = state;
    const {id} = props.componentData;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();

    const currentFilters = groupFilters(filters);
    const filteredData = filterData(data, currentFilters);
    const filteredEvents = filteredData.events;

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        mode
    }


    const createNewCard = (card, event) => {

        const updateCardData = (cardElement) => {
            if (cardElement.role === 'posterLink') {
                cardElement.link = `/afisha/${event.id}`
                cardElement.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
            }
            if (cardElement.childrenList && cardElement.childrenList.length > 0) {
                cardElement.childrenList.forEach(child => {
                    updateCardData(child);
                });
            }
            return cardElement;
        }

        const newCard = updateCardData({...card});
        return newCard;
    }

    let card = <EmptyEvent />;

    if (componentData.childrenList.length > 0) {
        const cardTemplate = componentData.childrenList[0];
        const cardData = createNewCard(cardTemplate, filteredEvents[0]);
        card = renderComponents(cardData, state);
    }

    return (
        <EventsContainerComponent
            id={id}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            onClick={getHandler(params, 'onClick')}
            onMouseDown={getHandler(params, 'onMouseDown')}
            onDragStart={getHandler(params, 'onDragStart')}
            onDragEnter={getHandler(params, 'onDragEnter')}
            onDragLeave={getHandler(params, 'onDragLeave')}
            onDragOver={getHandler(params, 'onDragOver')}
            onDragEnd={getHandler(params, 'onDragEnd')}
            onDrop={getHandler(params, 'onDrop')}
        >
            {children || <EmptyEvent />}
        </EventsContainerComponent>
    )
}
