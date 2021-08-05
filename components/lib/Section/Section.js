import React from 'react'
import { SectionWrapper } from './SectionStyled'
import { generateNewId, getChild, getComponent, getHandler } from '../../../core/functions/components';
import { useDispatch, useSelector } from 'react-redux';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { addComponent, addComponentToList, deleteComponent, setActiveComponent, setDragendComponent, unsetActiveComponent, unsetDragendComponent, updateComponentsList } from '../../../store/actions/document';
import { MODE } from '../../../core/config/site';
import { useState } from 'react';
import { useEffect } from 'react';



export default function Section(props) {

    const [isDroppable, setIsDroppable] = useState(false);

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const components = useSelector(state => state.document.components);
    // const componentData = useSelector(state => state.document.components[id]);
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();

    const [dragCounter, setDragCounter] = useState(0);

    useEffect(() => {
        if (dragCounter === 0) {
            setIsDroppable(false);
        }
        else {
            setIsDroppable(true);
        }
    }, [dragCounter]);

	const onDragStart = (e, componentId) => {
        dispatch(setDragendComponent(componentData));
		e.stopPropagation();
        e.target.style.opacity = '0.4';
		const parentId = e.target.parentElement.id;
		e.dataTransfer.setData('componentId', componentId);
		e.dataTransfer.setData('parentId', parentId);
        e.dataTransfer.effectAllowed = 'move';
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

    const onDragEnd = (e) => {
        e.stopPropagation();
        e.target.style.opacity = '1';
        setIsDroppable(false);
        setDragCounter(0);
        if (dragendComponent) {
            dispatch(unsetDragendComponent());
        }
    }

    const onDrop = (e, targetId, componentsList) => {
        e.stopPropagation();
        setIsDroppable(false);
        setDragCounter(0);
        const componentId = e.dataTransfer.getData('componentId');
		const parentId = e.dataTransfer.getData('parentId');
        const templateId = e.dataTransfer.getData('templateId');

        if (dragendComponent) {
            dispatch(unsetDragendComponent());
        }


        if (targetId === componentId) return;
        if (targetId === parentId) return;

        if (componentId) {
            const componentInList = componentsList[componentId];
            const component = getComponent(componentsData, componentId);

            if (getChild(component, targetId)) return;

            dispatch(updateComponentsList(componentId, parentId, targetId, componentInList));
            dispatch(deleteComponent(componentId));
            dispatch(addComponent(targetId, component));
        }

        if (templateId) {
            const template = templates[templateId];
            const id = generateNewId(10);
            dispatch(addComponentToList(targetId, {id, ...template}));
            dispatch(addComponent(targetId, {id, ...template}));
        }
    }


    return (
        <SectionWrapper
            id={id}
            {...props}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
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
            isActiveComponent={isActiveComponent}
            isDroppable={isDroppable}
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            onDragEnter={(e) => onDragEnter(e, props.componentData.id, components)}
            onDragLeave={onDragLeave}
            onDragOver={(e) => onDragOver(e)}
            onDragEnd={onDragEnd}
            onDrop={(e) => onDrop(e, id, components)}
        >
            {props.children}
        </SectionWrapper>
    )
}
