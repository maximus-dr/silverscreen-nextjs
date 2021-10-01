import React from 'react'
import { useDispatch } from 'react-redux';
import { updateComponentIds } from '../../../../core/functions/admin/components';
import { generateNewId, getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
import { renderComponents } from '../../../../core/functions/render';
import { getHandler } from '../../../../handlers';
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

    // const template = {
    //     typeName: 'section',
    //     id: 'sec0012',
    //     name: 'poster wrapper',
    //     styles: {
    //         common: {}
    //     },
    //     childrenList: [
    //         {
    //             typeName: 'link',
    //             id: 'link001',
    //             name: 'Постер',
    //             role: 'posterLink',
    //             styles: {
    //                 common: {}
    //             },
    //             childrenList: []
    //         }
    //     ]
    // }

    const createNewCard = (card, event) => {

        const updateCardData = (cardElement) => {
            if (cardElement.role === 'posterLink') {
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

    const cardTemplate = componentData.childrenList[0];
    const cardData = createNewCard(cardTemplate, filteredEvents[0]);
    const card = renderComponents(cardData, state);

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
            {card}
        </EventsContainerComponent>
    )
}
