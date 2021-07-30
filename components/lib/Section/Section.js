import React from 'react'
import { SectionWrapper } from './SectionStyled'
import { generateNewId, getHandler } from '../../../core/functions/components';
import { useDispatch, useSelector } from 'react-redux';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { addComponent, deleteComponent, updateComponentsList } from '../../../store/actions/document';



export default function Section(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const components = useSelector(state => state.document.components);
    const componentData = useSelector(state => state.document.components[id]);
    const dispatch = useDispatch();

    const onDrop = (e, targetId, componentsList) => {
        e.stopPropagation();

        const componentId = e.dataTransfer.getData('componentId');
        const templateId = e.dataTransfer.getData('templateId');
        if (componentId === targetId) return;
        if (componentId) {
            const component = componentsList[componentId];
            dispatch(deleteComponent(componentId));
            dispatch(addComponent(targetId, component));
        }
        
        if (templateId) {

            const template = templates[templateId];
            const id = generateNewId(10);
            dispatch(updateComponentsList({id, ...template}));
            dispatch(addComponent(targetId, {id, ...template}));
        }
    }

    return (
        <SectionWrapper
            {...props}
            componentData={componentData} 
            onMouseEnter={props.onMouseEnter} 
            onClick={getHandler(props, 'onClick')}
            isActiveComponent={isActiveComponent}
            draggable
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, props.componentData.id, components)}
        >
            {props.children}
        </SectionWrapper>
    )
}
