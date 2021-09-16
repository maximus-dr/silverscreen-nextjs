import React from 'react'
import { useDispatch } from 'react-redux';
import { actionProvider } from '../../../actions';
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
        mode
    }

    return (
        <LabelComponent
            id={id}
            as={componentData.tag || 'span'}
            htmlFor={componentData.for || ''}
            draggable={draggable}
            componentData={componentData}
            onClick={(e) => {
                actionProvider('component', 'onClick', mode)(e, params);
                role && actionProvider(role, 'onClick', mode)(e, params);
            }}
            onMouseDown={(e) => actionProvider('component', 'onMouseDown', mode)(e, params)}
            onDragStart={(e) => actionProvider('component', 'onDragStart', mode)(e, params)}
            onDragEnter={(e) => actionProvider('component', 'onDragEnter', mode)(e, params)}
            onDragLeave={(e) => actionProvider('component', 'onDragLeave', mode)(e, params)}
            onDragOver={(e) => actionProvider('component', 'onDragOver', mode)(e, params)}
            onDragEnd={(e) => actionProvider('component', 'onDragEnd',mode)(e, params)}
            onDrop={(e) => actionProvider('component', 'onDrop', mode)(e, params)}
            isActiveComponent={isActiveComponent}
            isActive={role && actionProvider(role, 'checkIsActive', mode)(null, params) || false}
        >
            {text}
            {props.children}
        </LabelComponent>
    );
}
