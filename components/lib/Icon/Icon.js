import React from 'react'
import { useDispatch } from 'react-redux';
import { actionProvider } from '../../../actions';
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
        dispatch
    }


    return (
        <IconComponent
            id={id}
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
        >
            {props.children}
        </IconComponent>
    );
}
