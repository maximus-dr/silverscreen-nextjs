import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionProvider } from '../../../actions';
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
            onClick={(e) => actionProvider('component', 'onClick')(e, params)}
            onMouseDown={(e) => actionProvider('component', 'onMouseDown')(e, params)}
            onDragStart={(e) => actionProvider('component', 'onDragStart')(e, params)}
            onDragEnter={(e) => actionProvider('component', 'onDragEnter')(e, params)}
            onDragLeave={(e) => actionProvider('component', 'onDragLeave')(e, params)}
            onDragOver={(e) => actionProvider('component', 'onDragOver')(e, params)}
            onDragEnd={(e) => actionProvider('component', 'onDragEnd')(e, params)}
            onDrop={(e) => actionProvider('component', 'onDrop')(e, params)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => e.preventDefault()}
            autoComplete={state.mode === 'admin' && 'off' || 'on'}
            autoFill={false}
        />
    );
}
