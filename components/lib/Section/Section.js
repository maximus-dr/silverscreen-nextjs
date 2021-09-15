import React from 'react'
import { SectionComponent } from './SectionStyled'
import { getChild, getComponent } from '../../../core/functions/common/components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { actionProvider } from '../../../actions/index';



export default function Section(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const draggable = mode === 'admin' ? true : false;
    const dispatch = useDispatch();

    const [allowDrop, setAllowDrop] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const params = {
        id,
        state,
        componentData,
        isDropBox: true,
        allowDrop,
        setAllowDrop,
        setDragCounter,
        dispatch,
        settings: componentData.settings
    }

    const checkAllowDrop = (dragendComponent, dropTarget) => {
        if (getChild(dragendComponent, dropTarget.id)) {
            return false;
        }
        if (dragendComponent.typeName === 'page') {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (dragendComponent) {
            if (dragCounter === 0) {
                setAllowDrop(false);
            }
            else if (dragendComponent) {
                setAllowDrop(checkAllowDrop(dragendComponent, componentData));
            }
        }
    }, [dragCounter, dragendComponent, componentData]);



    return (
        <SectionComponent
            id={id}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={(e) => {
                actionProvider('component', 'onClick')(e, params);
                actionProvider(componentData.role, 'onClick')(e, params);
            }}
            onMouseDown={(e) => actionProvider('component', 'onMouseDown')(e, params)}
            onDragStart={(e) => actionProvider('component', 'onDragStart')(e, params)}
            onDragEnter={(e) => actionProvider('component', 'onDragEnter')(e, params)}
            onDragLeave={(e) => actionProvider('component', 'onDragLeave')(e, params)}
            onDragOver={(e) => actionProvider('component', 'onDragOver')(e, params)}
            onDragEnd={(e) => actionProvider('component', 'onDragEnd')(e, params)}
            onDrop={(e) => actionProvider('component', 'onDrop')(e, params)}
            draggable={draggable}
            allowDrop={allowDrop}
            isActiveComponent={isActiveComponent}
            isActive={actionProvider('filter', 'checkIsActive')(null, params)}
        >
            {props.children}
        </SectionComponent>
    )
}
