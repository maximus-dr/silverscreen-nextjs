import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';
import { getChild, getComponent } from '../../../core/functions/components';
import { FormComponent } from './FormStyled'



export default function Form(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state.document);
    const activeComponent = state.activeComponent;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = state.componentsData;
    const componentData = getComponent(componentsData, id);
    const dragendComponent = state.dragendComponent;
    const dispatch = useDispatch();
    const draggable = state.mode === 'admin' ? true : false;

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
        <FormComponent
            id={id}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={(e) => onClick(e, component)}
            onMouseDown={(e) => onMouseDown(e, component)}
            isActiveComponent={isActiveComponent}
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
            draggable={draggable}
            allowDrop={allowDrop}
        >
            {props.children}
        </FormComponent>
    )
}
