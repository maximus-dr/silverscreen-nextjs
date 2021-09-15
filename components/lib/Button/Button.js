import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { actionProvider } from '../../../actions';
import { getComponent } from '../../../core/functions/common/components';
import { ButtonComponent } from './ButtonStyled'



export default function Button(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state.document);
    const activeComponent = state.activeComponent;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = state.componentsData;
    const componentData = getComponent(componentsData, id);
    const dispatch = useDispatch();
    const draggable = state.mode === 'admin' ? true : false;

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        handlers: componentData.handlers
    }

    return (
        <ButtonComponent
            {...props}
            id={id}
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
            draggable={draggable}
        >
            {componentData && componentData.value || ''}
            {props.children}
        </ButtonComponent>
    )
}
