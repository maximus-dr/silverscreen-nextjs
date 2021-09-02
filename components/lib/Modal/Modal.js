import React from 'react'
import { ModalComponent, ModalOverlay } from './ModalStyled'
import { getChild, getComponent } from '../../../core/functions/components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/actions';



export default function Modal(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state.document);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();

    const [allowDrop, setAllowDrop] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const component = {
        id,
        state,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
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
        <>
            <ModalComponent
                {...props}
                id={id}
                componentData={componentData}
                onMouseEnter={props.onMouseEnter}
                onClick={(e) => onClick(e, component)}
                isActiveComponent={isActiveComponent}
                onDragStart={(e) => onDragStart(e, component)}
                onDragEnter={(e) => onDragEnter(e, component)}
                onDragLeave={(e) => onDragLeave(e, component)}
                onDragOver={(e) => onDragOver(e, component)}
                onDragEnd={(e) => onDragEnd(e, component)}
                onDrop={(e) => onDrop(e, component)}
                draggable
                allowDrop={allowDrop}
            >
                {props.children}
            </ModalComponent>
        </>
    )
}
