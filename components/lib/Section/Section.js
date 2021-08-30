import React from 'react'
import { SectionComponent } from './SectionStyled'
import { getChild, getComponent, getHandler, getParent } from '../../../core/functions/components';
import { useDispatch, useSelector } from 'react-redux';
import { addComponent, addComponentToActive, deleteComponent, setActiveComponent, setDragendComponent, unsetActiveComponent, unsetDragendComponent, updateComponentChildrenList } from '../../../store/actions/document';
import { MODE } from '../../../core/config/site';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/admin/components';



export default function Section(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();
    const isDropBox = true;

    const [dragCounter, setDragCounter] = useState(0);
    const [allowDrop, setAllowDrop] = useState(false);

    const component = {
        id,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
        isDropBox,
        allowDrop,
        setAllowDrop,
        setDragCounter,
        dispatch,
        setDragendComponent() {
            dispatch(setDragendComponent(componentData))
        },
        unsetDragendComponent() {
            dispatch(unsetDragendComponent())
        },
        updateComponentChildrenList(id, children) {
            dispatch(updateComponentChildrenList(id, children))
        },
        deleteComponent(id) {
            dispatch(deleteComponent(id))
        },
        addComponent(id, data) {
            dispatch(addComponent(id, data))
        },
        addComponentToActive(component) {
            dispatch(addComponentToActive(component))
        }
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
        <SectionComponent
            id={id}
            {...props}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={(e) => {
                getHandler(props, 'onClick')();
                if (MODE === 'admin') {
                    e.stopPropagation();
                    if (activeComponent && activeComponent.id === id) {
                        dispatch(unsetActiveComponent());
                        return;
                    }
                    dispatch(setActiveComponent(props.componentData));
                }
            }}
            isActiveComponent={isActiveComponent}
            allowDrop={allowDrop}
            draggable
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
        >
            {props.children}
        </SectionComponent>
    )
}
