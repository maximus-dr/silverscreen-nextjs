import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';
import { getComponent } from '../../../core/functions/components';
import { InputComponent } from './InputStyled';



export default function Input(props) {

    const [value, setValue] = useState('');

    const id = props.componentData.id;
    const state = props.state.document;
    const {componentsData, activeComponent, mode} = state;
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentData = getComponent(componentsData, id);
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
        <InputComponent
            id={id}
            draggable={draggable}
            type="email"
            placeholder={componentData.placeholder || ''}
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => e.preventDefault()}
            autoComplete={state.mode === 'admin' && 'off' || 'on'}
            autoFill={false}
        />
    );
}
