import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { actionProvider } from '../../../actions';
import { getComponent } from '../../../core/functions/common/components';
import { TextareaComponent } from './TextareaStyled';



export default function Textarea(props) {

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
    const draggable = state.mode === 'admin' ? true : false;

    const params = {
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
            draggable={draggable}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            onClick={(e) => actionProvider('component', 'onClick')(e, params)}
            onMouseDown={(e) => actionProvider('component', 'onMouseDown')(e, params)}
            onDragStart={(e) => actionProvider('component', 'onDragStart')(e, params)}
            onDragEnter={(e) => actionProvider('component', 'onDragEnter')(e, params)}
            onDragLeave={(e) => actionProvider('component', 'onDragLeave')(e, params)}
            onDragOver={(e) => actionProvider('component', 'onDragOver')(e, params)}
            onDragEnd={(e) => actionProvider('component', 'onDragEnd')(e, params)}
            onDrop={(e) => actionProvider('component', 'onDrop')(e, params)}
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
