import React from 'react'
import { useDispatch } from 'react-redux';
import { getComponent } from '../../../core/functions/common/components';
import { LinkComponent } from './LinkStyled'
import Link from 'next/link';
import { actionProvider } from '../../../actions';



export default function LinkComp(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, mode} = state.document;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentData = getComponent(componentsData, id);
    const dragendComponent = state.dragendComponent;
    const draggable = mode === 'admin' ? true : false;
    const dispatch = useDispatch();

    const params = {
        id,
        state,
        componentData,
        componentsData,
        activeComponent,
        dragendComponent,
        isDropBox: false,
        dispatch,
        handlers: componentData.handlers
    }


    return (
        <Link href={componentData.url || ''} passHref={mode !== 'admin'}>
            <LinkComponent
                id={id}
                componentData={componentData}
                onClick={(e) => actionProvider('component', 'onClick')(e, params)}
                onMouseDown={(e) => actionProvider('component', 'onMouseDown')(e, params)}
                onDragStart={(e) => actionProvider('component', 'onDragStart')(e, params)}
                onDragEnter={(e) => actionProvider('component', 'onDragEnter')(e, params)}
                onDragLeave={(e) => actionProvider('component', 'onDragLeave')(e, params)}
                onDragOver={(e) => actionProvider('component', 'onDragOver')(e, params)}
                onDragEnd={(e) => actionProvider('component', 'onDragEnd')(e, params)}
                onDrop={(e) => actionProvider('component', 'onDrop')(e, params)}
                draggable={draggable}
                isActiveComponent={isActiveComponent}
            >
                {componentData && componentData.value || ''}
                {props.children}
            </LinkComponent>
        </Link>
    )
}
