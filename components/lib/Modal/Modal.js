import React from 'react'
import { ModalComponent } from './ModalStyled'
import { getChild, getComponent } from '../../../core/functions/common/components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getHandler } from '../../../actions';



export default function Modal(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state);
    const {activeComponent, componentsData, dragendComponent, mode} = state.document;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentData = getComponent(componentsData, id);
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
        dispatch,
        mode
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
                onClick={getHandler(params, 'onClick')}
                onMouseDown={getHandler(params, 'onMouseDown')}
                onDragStart={getHandler(params, 'onDragStart')}
                onDragEnter={getHandler(params, 'onDragEnter')}
                onDragLeave={getHandler(params, 'onDragLeave')}
                onDragOver={getHandler(params, 'onDragOver')}
                onDragEnd={getHandler(params, 'onDragEnd')}
                onDrop={getHandler(params, 'onDrop')}
                draggable
                allowDrop={allowDrop}
                isActiveComponent={isActiveComponent}
            >
                {props.children}
            </ModalComponent>
        </>
    )
}
