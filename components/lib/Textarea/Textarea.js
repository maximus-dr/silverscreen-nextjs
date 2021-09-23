import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getHandler } from '../../../handlers';
import { getComponent } from '../../../core/functions/common/components';
import { TextareaComponent } from './TextareaStyled';



export default function Textarea(props) {

    const {autofocus, cols, rows, maxlength, placeholder, readonly, required, id} = props.componentData;

    const state = useSelector(state => state);
    const {activeComponent, componentsData, dragendComponent, mode} = state.document;
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentData = getComponent(componentsData, id);
    const dispatch = useDispatch();
    const text = componentData.value || '';
    const draggable = mode === 'admin' ? true : false;

    const params = {
        id,
        state,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
        isDropBox: false,
        dispatch,
        mode
    }

    return (
        <TextareaComponent
            id={id}
            htmlFor={componentData.for || ''}
            draggable={draggable}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            onClick={getHandler(params, 'onClick')}
            onMouseDown={getHandler(params, 'onMouseDown')}
            onDragStart={getHandler(params, 'onDragStart')}
            onDragEnter={getHandler(params, 'onDragEnter')}
            onDragLeave={getHandler(params, 'onDragLeave')}
            onDragOver={getHandler(params, 'onDragOver')}
            onDragEnd={getHandler(params, 'onDragEnd')}
            onDrop={getHandler(params, 'onDrop')}
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
