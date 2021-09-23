import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getHandler } from '../../../handlers';
import { getComponent } from '../../../core/functions/common/components';
import { ButtonComponent } from './ButtonStyled'



export default function Button(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state);
    const {componentsData, activeComponent, mode} = state.document;
    const isActiveComponent = activeComponent && activeComponent.id === id;
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
        <ButtonComponent
            {...props}
            id={id}
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
            draggable={draggable}
        >
            {componentData && componentData.value || ''}
            {props.children}
        </ButtonComponent>
    )
}
