import React from 'react'
import { DescriptionComponent } from './DescriptionStyled'
import { useSelector } from 'react-redux';
import { getComponent, getHandler, getParent } from '../../../core/functions/components';
import { setActiveComponent, setDragendComponent, unsetActiveComponent, unsetDragendComponent, updateComponentChildrenList } from '../../../store/actions/document';
import { useDispatch } from 'react-redux';
import { MODE } from '../../../core/config/site';
import { onClick, onMouseDown } from '../../../core/functions/actions';



export default function Description(props) {

    const id = props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();
    const state = useSelector(state => state.document);

    const component = {
        id,
        state,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
        isDropBox: false,
        dispatch
    }


    const onDragStart = (e, componentId) => {
        dispatch(setDragendComponent(componentData));
        e.stopPropagation();
        e.target.style.opacity = '0.4';
        e.dataTransfer.setData('componentId', componentId);
        e.dataTransfer.effectAllowed = 'move';
    }

    const onDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.id === dragendComponent.id) return;

        if (e.altKey) {
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
        if (dragendComponent) dispatch(unsetDragendComponent());
    }

    const onDragOver = (e) => {
        e.dataTransfer.dropEffect =  dragendComponent && dragendComponent.id === id ? 'move' : 'none';
        e.preventDefault();
        e.stopPropagation();
    }

    const onDrop = (e) => {
        e.stopPropagation();
    }


    return (
        <DescriptionComponent
            id={id}
            {...props}
            draggable
            componentData={componentData}
            isActiveComponent={isActiveComponent}
            {...props.handlers}
            onClick={(e) => onClick(e, component)}
            onMouseDown={(e) => onMouseDown(e, component)}
            onDragStart={(e) => onDragStart(e, id)}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            {componentData.value || null}
            {props.children}
        </DescriptionComponent>
    )
}
