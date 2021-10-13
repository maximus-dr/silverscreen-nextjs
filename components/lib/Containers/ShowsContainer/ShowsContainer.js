import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  getChild, getComponent } from '../../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../../core/functions/common/filters';
import { getHandler } from '../../../../handlers';
import EmptyEvent from './EmptyEvent/EmptyEvent';
import { ShowsContainerComponent } from './ShowsContainerStyled'
import { useEffect } from 'react';
import { getHandlerResult } from './../../../../handlers/index';
import { useRouter } from 'next/router';


export default function ShowsContainer(props) {

    const {children, state} = props;
    const {filters, data} = state;
    const {id, dataList} = props.componentData;
    const {componentsData, activeComponent, mode, dragendComponent} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();
    const router = useRouter();
    const {query} = router;

    const eventId = query.eventId || null;

    const [allowDrop, setAllowDrop] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const currentFilters = groupFilters(filters);
    const filteredData = filterData(data, currentFilters);
    const filteredList = eventId
        ? filteredData[dataList].filter(item => item.eventId === eventId)
        : filteredData[dataList];

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
            const match = filteredList.find(item => item.id === cardId);
            if (match) {
                return true;
            }
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
        <ShowsContainerComponent
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
        </ShowsContainerComponent>
    )
}
