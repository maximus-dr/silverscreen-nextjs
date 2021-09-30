import React from 'react'
import { useDispatch } from 'react-redux';
import { generateNewId, getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
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

    const template = {
        typeName: 'section',
        id: 'sec001',
        name: 'poster wrapper',
        styles: {
            common: {}
        },
        childrenList: [
            {
                typeName: 'section',
                id: 'sec002',
                name: 'poster subwrapper',
                styles: {
                    common: {}
                },
                childrenList: [
                    {
                        typeName: 'link',
                        id: 'link001',
                        name: 'Постер',
                        role: 'posterLink',
                        styles: {
                            common: {}
                        },
                        childrenList: []
                    }
                ]
            }
        ]
    }

    const createNewCard = (template, event) => {
        const card = {...template}

        const check = (item) => {
            if (item.role === 'posterLink') {
                console.log('match');
            }
            if (item.childrenList && item.childrenList.length > 0) {
                item.childrenList.forEach(child => {
                    check(child);
                });
            }
        }

        check(card);


    }

    createNewCard(template, events[3]);



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
