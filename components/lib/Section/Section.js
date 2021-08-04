import React from 'react'
import { SectionWrapper } from './SectionStyled'
import { generateNewId, getHandler } from '../../../core/functions/components';
import { useDispatch, useSelector } from 'react-redux';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { addComponent, addComponentToList, deleteComponent, setActiveComponent, unsetActiveComponent, updateComponentsList } from '../../../store/actions/document';
import { MODE } from '../../../core/config/site';



export default function Section(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const components = useSelector(state => state.document.components);
    const componentData = useSelector(state => state.document.components[id]);
    const dispatch = useDispatch();

	const onDragStart = (e, componentId) => {
		e.stopPropagation();
        e.target.style.opacity = '0.4';
		const parentId = e.target.parentElement.id;
		e.dataTransfer.setData('componentId', componentId);
		e.dataTransfer.setData('parentId', parentId);
	}

    const onDragEnd = (e) => {
        e.target.style.opacity = '1';
    }

    const onDrop = (e, targetId, componentsList) => {
        e.stopPropagation();
        const componentId = e.dataTransfer.getData('componentId');
		const parentId = e.dataTransfer.getData('parentId');
        const templateId = e.dataTransfer.getData('templateId');
        if (targetId === componentId) return;
        if (targetId === parentId) return;

        if (componentId) {
            if (componentsList[componentId].childrenList.find(item => item.id === targetId)) {
                return;
            }
            const component = componentsList[componentId];
            if (activeComponent && componentId === activeComponent.id) {
                dispatch(unsetActiveComponent());
            }
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
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={onDragEnd}
            onDrop={(e) => onDrop(e, props.componentData.id, components)}
        >
            {props.children}
        </SectionWrapper>
    )
}
