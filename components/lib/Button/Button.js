import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/actions';
import { getComponent } from '../../../core/functions/components';
import { ButtonComponent } from './ButtonStyled'



export default function Button(props) {
    console.log(props);

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();
    const isLocked = true;

    const component = {
        id,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
        isDropBox: false,
        isLocked,
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
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
            draggable={!isLocked}
        >
            {componentData && componentData.value || ''}
            {props.children}
        </ButtonComponent>
    )
}
