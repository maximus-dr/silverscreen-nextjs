import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/actions';
import { getComponent } from '../../../core/functions/components';
import { InputComponent, InputLabel, InputWrapper } from './InputStyled';



export default function Input(props) {

    const [value, setValue] = useState('');

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();
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
        <InputComponent
            id={id}
            draggable
            type="email"
            placeholder={componentData.placeholder || ''}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            onClick={(e) => onClick(e, component)}
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => e.preventDefault()}
            autoComplete={state.mode === 'admin' && 'off'}
            autoFill={false}
        />
    );
}
