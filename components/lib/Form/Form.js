import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionProvider } from '../../../actions';
import { getChild, getComponent } from '../../../core/functions/common/components';
import { FormComponent } from './FormStyled'


export default function Form(props) {

    const id = props.componentData.id;
    const state = props.state.document;
    const {componentsData, activeComponent, dragendComponent, mode} = state;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentData = getComponent(componentsData, id);
    const dispatch = useDispatch();
    const draggable = mode === 'admin' ? true : false;

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
        dispatch
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
        <FormComponent
            id={id}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={(e) => actionProvider('component', 'onClick')(e, params)}
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
        >
            {props.children}
        </FormComponent>
    )
}
