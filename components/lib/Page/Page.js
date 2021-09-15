import React from 'react'
import { PageComponent } from './PageStyled';
import { useDispatch } from 'react-redux';
import { getChild, getComponent } from '../../../core/functions/common/components';
import { useEffect, useState } from 'react';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';



export default function Page(props) {

    const id = props.componentData.id;
    const state = props.state.document;
    const {componentsData, activeComponent, dragendComponent} = state;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();

    const [allowDrop, setAllowDrop] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const component = {
        id,
        state,
        componentData,
        isDropBox: true,
        allowDrop,
        setAllowDrop,
        setDragCounter,
        dispatch
    }

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
        <PageComponent
            {...props}
            id={id}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={(e) => onClick(e, component)}
            isActiveComponent={isActiveComponent}
            onMouseDown={(e) => onMouseDown(e, component)}
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
            allowDrop={allowDrop}
        >
            {props.children}
        </PageComponent>
    )
}
