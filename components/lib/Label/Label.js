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
            onDragStart={(e) => onDragStart(e, id, componentData, dispatch)}
            onDragEnter={(e) => onDragEnter(e, componentsData, componentData, dragendComponent, isDropBox, null, null, dispatch)}
            onDragLeave={onDragLeave}
            onDragEnd={(e) => onDragEnd(e, isDropBox, null, null, dragendComponent, dispatch)}
            onDragOver={(e) => onDragOver(e, isDropBox, null)}
            onDrop={(e) => onDrop(e, id, isDropBox)}
        >
            {text}
            {props.children}
        </LabelSpan>
    );
}
