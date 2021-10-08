import React from 'react'
import { useDispatch } from 'react-redux';
import {  getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
import { getHandler } from '../../../../handlers';
import EmptyEvent from './EmptyEvent/EmptyEvent';
import { EventsContainerComponent } from './EventsContainerStyled'


export default function EventsContainer(props) {

    const {children, state} = props;
    const {filters, data} = state;
    const {id, dataList} = props.componentData;
    const {componentsData, activeComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();

    const currentFilters = groupFilters(filters);
    const filteredData = filterData(data, currentFilters);
    const filteredList = filteredData[dataList];

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        mode
    }

    const cardList = mode === 'admin' 
        ? children 
        : children && children.filter(child => {
            const eventId = child.props.componentData.eventId;
            return filteredList.find(event => event.id === eventId);
        });
    
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
            { cardList || <EmptyEvent />}
        </EventsContainerComponent>
    )
}
