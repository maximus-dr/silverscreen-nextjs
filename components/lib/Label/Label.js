import React from 'react'
import { useDispatch } from 'react-redux';
import { getHandler, getHandlerResult } from '../../../handlers';
import { getComponent } from '../../../core/functions/common/components';
import { LabelComponent } from './LabelStyled'



export default function Label(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const {role, settings} = componentData;
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const dispatch = useDispatch();
    const text = componentData.value || '';
    const draggable = mode === 'admin' ? true : false;

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        settings,
        mode,
        role
    }

    return (
        <LabelComponent
            id={id}
            as={componentData.tag || 'span'}
            htmlFor={componentData.for || ''}
            draggable={draggable}
            componentData={componentData}
            onClick={getHandler(params, 'onClick')}
            onMouseDown={getHandler(params, 'onMouseDown')}
            onDragStart={getHandler(params, 'onDragStart')}
            onDragEnter={getHandler(params, 'onDragEnter')}
            onDragLeave={getHandler(params, 'onDragLeave')}
            onDragOver={getHandler(params, 'onDragOver')}
            onDragEnd={getHandler(params, 'onDragEnd')}
            onDrop={getHandler(params, 'onDrop')}
            isActiveComponent={isActiveComponent}
            isActive={getHandlerResult(params, 'checkIsActive')}
        >
            {text}
            {props.children}
        </LabelComponent>
    );
}
