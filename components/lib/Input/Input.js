import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHandler } from '../../../handlers';
import { getComponent } from '../../../core/functions/common/components';
import { InputComponent } from './InputStyled';



export default function Input(props) {

    const [value, setValue] = useState('');

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, mode} = state.document;
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentData = getComponent(componentsData, id);
    const dispatch = useDispatch();
    const draggable = mode === 'admin' ? true : false;

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        mode
    }

    return (
        <InputComponent
            id={id}
            draggable={draggable}
            type="email"
            placeholder={componentData.placeholder || ''}
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => e.preventDefault()}
            autoComplete={state.mode === 'admin' && 'off' || 'on'}
            autoFill={false}
        />
    );
}
