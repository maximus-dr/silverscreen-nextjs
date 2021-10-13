import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  getChild, getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
import { getHandler } from '../../../../handlers';
import EmptyEvent from './EmptyEvent/EmptyEvent';
import { EventsContainerComponent } from './EventsContainerStyled'
import { useEffect } from 'react';
import { getHandlerResult } from './../../../../handlers/index';


export default function EventsContainer(props) {

    const {children, state} = props;
    const {filters, data} = state;
    const {id, dataList} = props.componentData;
    const {componentsData, activeComponent, mode, dragendComponent} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();

    const [allowDrop, setAllowDrop] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const currentFilters = groupFilters(filters);
    const filteredData = filterData(data, currentFilters);
    const filteredList = filteredData[dataList];

    const params = {
        id,
        state,
        componentData,
        isDropBox: true,
        allowDrop,
        setAllowDrop,
        setDragCounter,
        dispatch,
        mode
    }

    const cardList = mode === 'admin'
        ? children
        : children && children.filter(child => {
            if (!filteredList) return;
            const cardId = child.props.componentData.cardId;
            return filteredList.find(event => event.id === cardId);
        });

    const checkAllowDrop = (dragendComponent, dropTarget) => {
        if (getChild(dragendComponent, dropTarget.id)) {
            return false;
        }
        if (dragendComponent.typeName === 'page') {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (dragendComponent) {
            if (dragCounter === 0) {
                setAllowDrop(false);
            }
            else if (dragendComponent) {
                setAllowDrop(checkAllowDrop(dragendComponent, componentData));
            }
        }
    }, [dragCounter, dragendComponent, componentData]);

    return (
        <EventsContainerComponent
            id={id}
            {...props}
            componentData={componentData}
            onClick={getHandler(params, 'onClick')}
            onMouseDown={getHandler(params, 'onMouseDown')}
            onDragStart={getHandler(params, 'onDragStart')}
            onDragEnter={getHandler(params, 'onDragEnter')}
            onDragLeave={getHandler(params, 'onDragLeave')}
            onDragOver={getHandler(params, 'onDragOver')}
            onDragEnd={getHandler(params, 'onDragEnd')}
            onDrop={getHandler(params, 'onDrop')}
            allowDrop={allowDrop}
            isActiveComponent={isActiveComponent}
            isActive={getHandlerResult(params, 'checkIsActive')}
        >
            { cardList && cardList.length > 0 ? cardList : <EmptyEvent />}
        </EventsContainerComponent>
    )
}
