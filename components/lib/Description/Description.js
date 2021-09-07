import React from 'react'
import { DescriptionComponent } from './DescriptionStyled'
import { getComponent } from '../../../core/functions/components';
import { useDispatch } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';



export default function Description(props) {

    const id = props.componentData.id;
    const state = props.state.document;
    const {componentsData, activeComponent, mode} = state;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();
    const draggable = mode === 'admin' ? true : false;

    const component = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch
    }

    return (
        <DescriptionComponent
            id={id}
            {...props}
            draggable={draggable}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            {...props.handlers}
            onClick={(e) => onClick(e, component)}
            onMouseDown={(e) => onMouseDown(e, component)}
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDrop={(e) => onDrop(e, component)}
        >
            {componentData.value || null}
            {props.children}
        </DescriptionComponent>
    )
}
