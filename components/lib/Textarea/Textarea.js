import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';
import { getComponent } from '../../../core/functions/components';
import { TextareaComponent } from './TextareaStyled';



export default function Textarea(props) {

    console.log(props.componentData);

    const {autofocus, cols, rows, maxlength, placeholder, readonly, required} = props.componentData;

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();
    const text = componentData.value || '';
    const state = useSelector(state => state.document);

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
        <TextareaComponent
            id={id}
            htmlFor={componentData.for || ''}
            draggable
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
            autoFocus={autofocus}
            cols={cols || ''}
            rows={rows || ''}
            maxlength={maxlength || ''}
            placeholder={placeholder || ''}
            readOnly={readonly || ''}
            required={required || ''}
        >

        </TextareaComponent>
    );
}
