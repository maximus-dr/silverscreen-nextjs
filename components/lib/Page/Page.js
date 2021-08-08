import React from 'react'
import { PageBody } from './PageStyled';
import { useDispatch, useSelector } from 'react-redux';
import { generateNewId, getChild, getComponent } from '../../../core/functions/components';
import { addComponent, deleteComponent, unsetActiveComponent, setActiveComponent } from '../../../store/actions/document';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { MODE } from '../../../core/config/site';
import { useEffect, useState } from 'react';



const checkAllowDrop = (dragendComponent, dropTarget) => {
    if (getChild(dragendComponent, dropTarget.id)) {
        return false;
    }
    if (dragendComponent.typeName === 'page') {
        return false;
    }
    return true;
}


export default function Page(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();

    const [isDroppable, setIsDroppable] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    useEffect(() => {
        if (dragCounter === 0) {
            setIsDroppable(false);
        }

        else {
            setIsDroppable(checkAllowDrop(dragendComponent, componentData));
        }
    }, [dragCounter]);

    const onDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(prev => prev + 1);
    }

    const onDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(prev => prev - 1);
    }

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = isDroppable ? e.dataTransfer.effectAllowed : 'none';
    }

    const onDrop = (e, targetId) => {
        e.stopPropagation();
        setIsDroppable(false);
        setDragCounter(0);
        const componentId = e.dataTransfer.getData('componentId');
        const templateId = e.dataTransfer.getData('templateId');
        if (targetId === componentId) return;
        if (componentId) {
            const component = getComponent(componentsData, componentId);
            if (getChild(component, targetId)) return;
            dispatch(deleteComponent(componentId));
            dispatch(addComponent(targetId, component));

        }
        if (templateId) {
            const template = templates[templateId];
            if (template.typeName === 'page') return;
            const id = generateNewId(10);
            dispatch(addComponent(targetId, {id, ...template}));
        }
    }

  return (
      <PageBody
	    id={id}
        {...props}
        componentData={componentData}
        isActiveComponent={isActiveComponent}
        isDroppable={isDroppable}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, props.componentData.id)}
        onClick={(e) => {
            if (MODE === 'admin') {
                e.stopPropagation();
                if (activeComponent && activeComponent.id === id) {
                    dispatch(unsetActiveComponent());
                    return;
                }
                dispatch(setActiveComponent(props.componentData));
            }
        }}
      >
        {props.children}
      </PageBody>
  )
}
