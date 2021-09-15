import React from 'react'
import { SectionComponent } from './SectionStyled'
import { getChild, getComponent } from '../../../core/functions/common/components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';



export default function Section(props) {

    const id = props.componentData.id;
    const state = props.state.document;
    const {componentsData, activeComponent, dragendComponent, mode} = state;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const draggable = mode === 'admin' ? true : false;
    const dispatch = useDispatch();

    const [allowDrop, setAllowDrop] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const onFilterClick = (e) => {
        e.preventDefault();
        console.log('filter click');
    }


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
        <SectionComponent
            id={id}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={(e) => {
                onClick(e, component);
                if (componentData.role === 'filter') {
                    onFilterClick(e, component);
                }
            }}
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
        </SectionComponent>
    )
}
