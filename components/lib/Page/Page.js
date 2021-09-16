import React from 'react'
import { PageComponent } from './PageStyled';
import { useDispatch } from 'react-redux';
import { getChild, getComponent } from '../../../core/functions/common/components';
import { useEffect, useState } from 'react';
import { actionProvider } from '../../../actions';



export default function Page(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
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
        mode
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
        <PageComponent
            {...props}
            id={id}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={(e) => actionProvider('component', 'onClick', mode)(e, params)}
            onMouseDown={(e) => actionProvider('component', 'onMouseDown', mode)(e, params)}
            onDragStart={(e) => actionProvider('component', 'onDragStart', mode)(e, params)}
            onDragEnter={(e) => actionProvider('component', 'onDragEnter', mode)(e, params)}
            onDragLeave={(e) => actionProvider('component', 'onDragLeave', mode)(e, params)}
            onDragOver={(e) => actionProvider('component', 'onDragOver', mode)(e, params)}
            onDragEnd={(e) => actionProvider('component', 'onDragEnd', mode)(e, params)}
            onDrop={(e) => actionProvider('component', 'onDrop', mode)(e, params)}
            allowDrop={allowDrop}
            isActiveComponent={isActiveComponent}
        >
            {props.children}
        </PageComponent>
    )
}
