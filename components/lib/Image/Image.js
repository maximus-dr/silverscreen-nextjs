import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getComponent } from '../../../core/functions/components';
import { ImageComponent } from './ImageStyled'
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';



export default function Image(props) {

    const {id} = props.componentData;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const state = useSelector(state => state.document);
    const dispatch = useDispatch();

    const component = {
        id,
        state,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
        isDropBox: false,
        dispatch
    }

    return (
        <ImageComponent
            id={id}
            draggable
            componentData={componentData}
            alt={"alt"}
            src={componentData.link}
            width={componentData.width || '200px'}
            height={componentData.height || 'auto'}
            isActiveComponent={isActiveComponent}
            onClick={(e) => onClick(e, component)}
            onMouseDown={(e) => onMouseDown(e, component)}
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
        />
    )
}
