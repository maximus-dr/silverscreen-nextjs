import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown } from '../../../core/functions/actions';
import { getComponent } from '../../../core/functions/components';
import { LinkComponent } from './LinkStyled'
import Link from 'next/link';



export default function LinkComp(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state.document);
    const activeComponent = state.activeComponent;
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = state.componentsData;
    const componentData = getComponent(componentsData, id);
    const dragendComponent = state.dragendComponent;
    const mode = state.mode;
    const draggable = state.mode === 'admin' ? true : false;
    const dispatch = useDispatch();


    const component = {
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
                isActiveComponent={isActiveComponent}
                onClick={(e) => onClick(e, component)}
                onMouseDown={(e) => onMouseDown(e, component)}
                onDragStart={(e) => onDragStart(e, component)}
                onDragEnter={(e) => onDragEnter(e, component)}
                onDragLeave={(e) => onDragLeave(e, component)}
                onDragOver={(e) => onDragOver(e, component)}
                onDragEnd={(e) => onDragEnd(e, component)}
                onDrop={(e) => onDrop(e, component)}
                draggable={draggable}
            >
                {componentData && componentData.value || ''}
                {props.children}
            </LinkComponent>
        </Link>
    )
}
