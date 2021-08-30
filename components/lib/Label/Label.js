import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MODE } from '../../../core/config/site';
import { onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/admin/components';
import { getComponent, getHandler, getParent } from '../../../core/functions/components';
import { setActiveComponent, setDragendComponent, unsetActiveComponent, unsetDragendComponent, updateComponentChildrenList } from '../../../store/actions/document';
import { LabelSpan } from './LabelStyled'



export default function Label(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();
    const text = componentData.value || '';
    const isDropBox = false;

    const state = {
        id,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
        isDropBox,
        dispatch
    }

    return (
        <LabelSpan
            id={id}
            draggable
            {...props}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            {...props.handlers}
            onClick={(e) => {
                getHandler(props, 'onClick')();
                if (MODE === 'admin') {
                    e.stopPropagation();
                    if (activeComponent && activeComponent.id === id) {
                        dispatch(unsetActiveComponent());
                        return;
                    }
                    dispatch(setActiveComponent(props.componentData));
                }
            }}
            onDragStart={(e) => onDragStart(e, state)}
            onDragEnter={(e) => onDragEnter(e, state)}
            onDragLeave={(e) => onDragLeave(e, state)}
            onDragOver={(e) => onDragOver(e, state)}
            onDragEnd={(e) => onDragEnd(e, state)}
            onDrop={(e) => onDrop(e, state)}
        >
            {text}
            {props.children}
        </LabelSpan>
    );
}
