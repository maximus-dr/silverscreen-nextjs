import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generateNewId } from '../../../../../core/functions/components';
import { updateComponentsList, addComponent } from '../../../../../store/actions/document';
import {ComponentsLi,ComponentsUl,ComponentsUlCaption,ComponentsUlWrapper,ComponentsUlContent,ComponentsUlSubtitle } from './ComponentsGroupStyled'


export default function ComponentsGroup(props) {
    const {title, templates} = props;

    const [expanded, setExpanded] = useState(false);
    const [activeItemId, setActiveItemId] = useState(null);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();

    const onDragStart = (e, templateId) => {
        e.dataTransfer.setData('templateId', templateId);
    }


    const templatesList = templates && templates.map(template => {
        return template.isSubtitle
            ? (
                <ComponentsUlSubtitle key={template.id}>{template.name}</ComponentsUlSubtitle>
            )
            : (
                <ComponentsLi
                    draggable
                    onDragStart={(e) => onDragStart(e, template.id)}
                    key={template.id} 
                    isActive={template.id === activeItemId} 
                    onClick={() => {
                        setActiveItemId(template.id);
                        if (activeComponent) {
                            const id = generateNewId(10)
                            dispatch(addComponent(activeComponent.id, {...template.component, id}));
                            dispatch(updateComponentsList({...template.component, id}))
                        }
                    }}
                >
                    {template.name}
                </ComponentsLi>
            );
    })

    return (
        <ComponentsUlWrapper>
            <ComponentsUl>
                <ComponentsUlCaption
                    expanded={expanded} 
                    onClick={() => {setExpanded(prev => !prev)}} 
                >
                    {title}
                </ComponentsUlCaption>
                
                <ComponentsUlContent 
                    expanded={expanded}
                    onClick={() => {

                    }}
                >
                    {templatesList}
                </ComponentsUlContent>

            </ComponentsUl>
        </ComponentsUlWrapper>
    )
}
