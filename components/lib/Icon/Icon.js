import React from 'react'
import { useDispatch } from 'react-redux';
import { getHandler } from '../../../actions';
import { getComponent } from '../../../core/functions/common/components';
import { IconComponent } from './IconStyled';


export default function Icon(props) {

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
        <IconComponent
            id={id}
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
        >
            {props.children}
        </IconComponent>
    );
}
