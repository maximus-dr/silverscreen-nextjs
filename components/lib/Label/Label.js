import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MODE } from '../../../core/config/site';
import { getComponent, getHandler, getParent } from '../../../core/functions/components';
import { setActiveComponent, setDragendComponent, unsetActiveComponent, updateComponentChildrenList } from '../../../store/actions/document';
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


    const onDragStart = (e, componentId) => {
        dispatch(setDragendComponent(componentData));
        e.stopPropagation();
        e.target.style.opacity = '0.4';
        e.dataTransfer.setData('componentId', componentId);
        e.dataTransfer.effectAllowed = e.shiftKey ? 'none' : 'move';
    }

    const onDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.id === dragendComponent.id) return;

        if (e.shiftKey) {
            const parent = getParent(componentsData, id);
            const hasCommonParent = parent.childrenList.includes(dragendComponent);

            if (hasCommonParent) {
                const index = parent.childrenList.indexOf(componentData);
                const parentCopy = {
                    ... parent,
                    childrenList: [...parent.childrenList]
                };
                parentCopy.childrenList.splice(parentCopy.childrenList.indexOf(dragendComponent), 1);
                parentCopy.childrenList.splice(index, 0, dragendComponent);
                dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
            }
        }
    }

    const onDragLeave = (e) => {
        e.stopPropagation();
    }

    const onDragEnd = (e) => {
        e.target.style.opacity = '1';
    }

    const onDragOver = (e) => {
        e.dataTransfer.dropEffect =  dragendComponent && dragendComponent.id === id ? 'move' : 'none';
        e.preventDefault();
        e.stopPropagation();
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
            onDragStart={(e) => onDragStart(e, id)}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
        >
            {text}
            {props.children}
        </LabelSpan>
    );
}
