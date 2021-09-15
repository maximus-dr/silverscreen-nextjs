import React from 'react'
import { ModalComponent, ModalOverlay } from './ModalStyled'
import { getChild, getComponent } from '../../../core/functions/common/components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { actionProvider } from '../../../actions';



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

    const params = {
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
                id={id}
                componentData={componentData}
                onMouseEnter={props.onMouseEnter}
                onClick={(e) => actionProvider('component', 'onClick')(e, params)}
                onMouseDown={(e) => actionProvider('component', 'onMouseDown')(e, params)}
                onDragStart={(e) => actionProvider('component', 'onDragStart')(e, params)}
                onDragEnter={(e) => actionProvider('component', 'onDragEnter')(e, params)}
                onDragLeave={(e) => actionProvider('component', 'onDragLeave')(e, params)}
                onDragOver={(e) => actionProvider('component', 'onDragOver')(e, params)}
                onDragEnd={(e) => actionProvider('component', 'onDragEnd')(e, params)}
                onDrop={(e) => actionProvider('component', 'onDrop')(e, params)}
                draggable
                allowDrop={allowDrop}
                isActiveComponent={isActiveComponent}
            >
                {props.children}
            </ModalComponent>
        </>
    )
}
