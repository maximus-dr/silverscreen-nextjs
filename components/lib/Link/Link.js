import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onClick, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/actions';
import { getComponent } from '../../../core/functions/components';
import { LinkComponent } from './LinkStyled'
import Link from 'next/link';



export default function LinkComp(props) {

    const id = props.componentData.id;
    const state = useSelector(state => state.document);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const mode = useSelector(state => state.document.mode);
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
                {...props}
                id={id}
                componentData={componentData}
                isActiveComponent={isActiveComponent}
                onClick={(e) => onClick(e, component)}
                onDragStart={(e) => onDragStart(e, component)}
                onDragEnter={(e) => onDragEnter(e, component)}
                onDragLeave={(e) => onDragLeave(e, component)}
                onDragOver={(e) => onDragOver(e, component)}
                onDragEnd={(e) => onDragEnd(e, component)}
                onDrop={(e) => onDrop(e, component)}
                draggable={mode === 'admin'}
            >
                {componentData && componentData.value || ''}
                {props.children}
            </LinkComponent>
        </Link>
    )
}
