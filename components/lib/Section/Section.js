import React from 'react'
import { SectionBody } from './SectionStyled'
import { generateNewId, getChild, getComponent, getHandler } from '../../../core/functions/components';
import { useDispatch, useSelector } from 'react-redux';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { addComponent, deleteComponent, setActiveComponent, setDragendComponent, unsetActiveComponent, unsetDragendComponent } from '../../../store/actions/document';
import { MODE } from '../../../core/config/site';
import { useState } from 'react';
import { useEffect } from 'react';



export default function Section(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();

    const [dragCounter, setDragCounter] = useState(0);
    const [allowDrop, setAllowDrop] = useState(false);

    const checkAllowDrop = (dragendComponent, dropTarget) => {
        if (getChild(dragendComponent, dropTarget.id)) {
            return false;
        }
        if (dragendComponent.typeName === 'page') {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (dragendComponent) {
            if (dragCounter === 0) {
                setAllowDrop(false);
            }
            
            else {
                setAllowDrop(checkAllowDrop(dragendComponent, componentData));
            }
        }
    }, [dragCounter, dragendComponent, componentData]);



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
        e.dataTransfer.dropEffect = allowDrop ? e.dataTransfer.effectAllowed : 'none';
    }

    const onDragEnd = (e) => {
        e.stopPropagation();
        e.target.style.opacity = '1';
        setAllowDrop(false);
        setDragCounter(0);
        if (dragendComponent) {
            dispatch(unsetDragendComponent());
        }
    }

    const onDrop = (e, targetId) => {
        e.stopPropagation();
        setAllowDrop(false);
        setDragCounter(0);
        const componentId = e.dataTransfer.getData('componentId');
        const templateId = e.dataTransfer.getData('templateId');

        if (dragendComponent) {
            dispatch(unsetDragendComponent());
        }

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
        <SectionBody
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
            allowDrop={allowDrop}
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
            onDrop={(e) => onDrop(e, id)}
        >
            {props.children}
        </SectionBody>
    )
}
