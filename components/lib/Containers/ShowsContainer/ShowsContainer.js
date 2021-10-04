import React from 'react'
import { useDispatch } from 'react-redux';
import {  getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
import { getHandler } from '../../../../handlers';
import EmptyEvent from './EmptyEvent/EmptyEvent';
import { ShowsContainerComponent } from './ShowsContainerStyled';



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
    const filteredShows = filteredData.shows;

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
            if (cardElement.role === 'showCard') {
                cardElement.eventId = event.id;
            }
            if (cardElement.role === 'posterLink') {
                cardElement.link = `/afisha/${event.id}`
                cardElement.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
            }
            if (cardElement.role === 'cardTitle') {
                cardElement.value = event.acronym;
            }
            if (cardElement.role === 'genreItem') {
                cardElement.value = event.genre[0].acronym
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

    if (mode === 'admin' && componentData.childrenList.length > 0) {
        const cardTemplate = componentData.childrenList[0];
        createNewCard(cardTemplate, filteredEvents[0]);
    }

    const cardList = mode === 'admin' ? children : children && children.filter(child => {
        return filteredEvents.find(event => event.id === child.props.componentData.eventId)
    })
    
    return (
        <ShowsContainerComponent
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
            { cardList || <EmptyEvent />}
        </ShowsContainerComponent>
    )
}
