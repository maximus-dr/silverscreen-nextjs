import React from 'react'
import { DescriptionComponent } from './DescriptionStyled'
import { getComponent } from '../../../core/functions/common/components';
import { useDispatch } from 'react-redux';
import { getHandler } from '../../../handlers';


export default function Description(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const {role} = componentData;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();
    const draggable = mode === 'admin' ? true : false;

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        mode,
        role
    }


    return (
        <DescriptionComponent
            id={id}
            {...props}
            draggable={draggable}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            {...props.handlers}
            onClick={getHandler(params, 'onClick')}
            onMouseDown={getHandler(params, 'onMouseDown')}
            onDragStart={getHandler(params, 'onDragStart')}
            onDragEnter={getHandler(params, 'onDragEnter')}
            onDragLeave={getHandler(params, 'onDragLeave')}
            onDragOver={getHandler(params, 'onDragOver')}
            onDragEnd={getHandler(params, 'onDragEnd')}
            onDrop={getHandler(params, 'onDrop')}
        >
            {componentData.value || null}
            {props.children}
        </DescriptionComponent>
    )
}
