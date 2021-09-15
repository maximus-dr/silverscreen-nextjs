import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';
import { getComponent } from '../../../core/functions/common/components';
import { ButtonComponent } from './ButtonStyled'



export default function Button(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state.document);
    const activeComponent = state.activeComponent;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = state.componentsData;
    const componentData = getComponent(componentsData, id);
    const dispatch = useDispatch();
    const draggable = state.mode === 'admin' ? true : false;

    const component = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        handlers: componentData.handlers
    }

    return (
        <ButtonComponent
            {...props}
            id={id}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            onClick={(e) => onClick(e, component)}
            onMouseDown={(e) => onMouseDown(e, component)}
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
            draggable={draggable}
        >
            {componentData && componentData.value || ''}
            {props.children}
        </ButtonComponent>
    )
}
