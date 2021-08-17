import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generateNewId } from '../../../../../core/functions/components';
import {  addComponent, addComponentToActive, setDragendComponent, unsetDragendComponent } from '../../../../../store/actions/document';
import {ComponentsLi,ComponentsUl,ComponentsUlCaption,ComponentsUlWrapper,ComponentsUlContent,ComponentsUlSubtitle } from './ComponentsGroupStyled'
import { nanoid } from 'nanoid';



export default function ComponentsGroup(props) {
    const {title, templates} = props;

    const [expanded, setExpanded] = useState(false);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();

    const onDragStart = (e, template) => {
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('templateId', template.id);
        const id = nanoid(10);
        dispatch(setDragendComponent({id, ...template.component}));
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
                            if (template.name === 'page' && activeComponent.typeName !== 'Document') {
                                return
                            }
                            const id = generateNewId(10);
                            dispatch(addComponentToActive({...template.component, id}));
                            dispatch(addComponent(activeComponent.id, {...template.component, id}));
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
