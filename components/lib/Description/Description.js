import React from 'react'
import { DescriptionComponent } from './DescriptionStyled'
import { useSelector } from 'react-redux';
import { getComponent, getParent } from '../../../core/functions/components';
import { setDragendComponent, unsetDragendComponent, updateComponentChildrenList } from '../../../store/actions/document';
import { useDispatch } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';



export default function Description(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state.document);
    const componentsData = state.componentsData;
    const componentData = getComponent(componentsData, id);
    const activeComponent = state.activeComponent;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();
    const draggable = state.mode === 'admin' ? true : false;

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
