import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  addComponent, addComponentToActive, setDragendComponent, unsetDragendComponent } from '../../../../../store/actions/document';
import {ComponentsLi,ComponentsUl,ComponentsUlCaption,ComponentsUlWrapper,ComponentsUlContent,ComponentsUlSubtitle } from './ComponentsGroupStyled'
import { updateComponentIds } from '../../../../../core/functions/admin/components';



export default function ComponentsGroup(props) {
    const {category, templates} = props;

    const [expanded, setExpanded] = useState(false);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();

    const onDragStart = (e, template) => {
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('template', template.category);
        dispatch(setDragendComponent(updateComponentIds(template)));
    }

    const onDragEnd = () => {
        dragendComponent && dispatch(unsetDragendComponent());
    }


    const templatesList = templates && templates.map(template => {
        return template.isSubtitle
            ? (
                <ComponentsUlSubtitle key={template.id}>{template.name}</ComponentsUlSubtitle>
            )
            : (
                <ComponentsLi
                    draggable
                    onDragStart={(e) => onDragStart(e, template)}
                    onDragEnd={onDragEnd}
                    key={template.id}
                    onClick={() => {
                        if (activeComponent) {
                            if (template.typeName === 'page' && activeComponent.typeName !== 'Document') {
                                return
                            }
                            const component = updateComponentIds(template);
                            activeComponent && dispatch(addComponentToActive(component));
                            dispatch(addComponent(activeComponent.id, component));
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
                    {category}
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
