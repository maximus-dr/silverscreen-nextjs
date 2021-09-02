import React from 'react'
import { PageComponent, PageOverlay } from './PageStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getChild, getComponent } from '../../../core/functions/components';
import { useEffect, useState } from 'react';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/actions';
import Modal from '../Modal/Modal';



export default function Page(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();
    const modal = useSelector(state => state.document.modal);
    const state = useSelector(state => state.document);

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
        <PageComponent
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
            allowDrop={allowDrop}
        >
            {props.children}
            {/* <PageOverlay isOpen={modal}></PageOverlay> */}
        </PageComponent>
    )
}
