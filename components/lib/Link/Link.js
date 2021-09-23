import React from 'react'
import { useDispatch } from 'react-redux';
import { getComponent } from '../../../core/functions/common/components';
import { LinkComponent } from './LinkStyled'
import Link from 'next/link';
import { getHandler } from '../../../handlers';



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
        mode
    }


    return (
        <Link href={componentData.url || ''} passHref={mode !== 'admin'}>
            <LinkComponent
                id={id}
                componentData={componentData}
                onClick={getHandler(params, 'onClick')}
                onMouseDown={getHandler(params, 'onMouseDown')}
                onDragStart={getHandler(params, 'onDragStart')}
                onDragEnter={getHandler(params, 'onDragEnter')}
                onDragLeave={getHandler(params, 'onDragLeave')}
                onDragOver={getHandler(params, 'onDragOver')}
                onDragEnd={getHandler(params, 'onDragEnd')}
                onDrop={getHandler(params, 'onDrop')}
                draggable={draggable}
                isActiveComponent={isActiveComponent}
            >
                {componentData && componentData.value || ''}
                {props.children}
            </LinkComponent>
        </Link>
    )
}
