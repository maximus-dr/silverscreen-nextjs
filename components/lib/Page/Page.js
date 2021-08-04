import React from 'react'
import { PageBody } from './PageStyled';
import { useDispatch, useSelector } from 'react-redux';
import { generateNewId } from '../../../core/functions/components';
import { addComponent, deleteComponent, addComponentToList, unsetActiveComponent, setActiveComponent, updateComponentsList } from '../../../store/actions/document';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { MODE } from '../../../core/config/site';
import { useEffect, useState } from 'react';



export default function Page(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentData = useSelector(state => state.document.components[id]);
    const components = useSelector(state => state.document.components);
    const dispatch = useDispatch();

    const [isDroppable, setIsDroppable] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    useEffect(() => {
        if (dragCounter === 0) {
            setIsDroppable(false);
        }

        else {
            setIsDroppable(true);
        }
    }, [dragCounter]);


    const onDrop = (e, targetId, componentsList) => {
        e.stopPropagation();
        setIsDroppable(false);
        setDragCounter(0);
        const componentId = e.dataTransfer.getData('componentId');
        const parentId = e.dataTransfer.getData('parentId');
        const templateId = e.dataTransfer.getData('templateId');
        if (targetId === componentId) return;
        if (targetId === parentId) return;
        if (componentId) {
            if (activeComponent && componentId === activeComponent.id) {
                dispatch(unsetActiveComponent());
            }
            const component = componentsList[componentId];
            dispatch(updateComponentsList(componentId, parentId, targetId, component));
            dispatch(deleteComponent(componentId));
            dispatch(addComponent(targetId, component));
            if (activeComponent && componentId === activeComponent.id) {
                dispatch(setActiveComponent(component));
            }
        }
        if (templateId) {
            const template = templates[templateId];
            const id = generateNewId(10);
            dispatch(addComponentToList(targetId, {id, ...template}));
            dispatch(addComponent(targetId, {id, ...template}));
        }
    }

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
        onDrop={(e) => onDrop(e, props.componentData.id, components)}
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
