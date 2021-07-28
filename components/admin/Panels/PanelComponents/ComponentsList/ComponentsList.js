import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generateNewId } from '../../../../../core/functions/components';
import { addComponent, putComponent } from '../../../../../store/actions/document';
import {ComponentsLi,ComponentsUl,ComponentsUlCaption,ComponentsUlWrapper,ComponentsUlContent,ComponentsUlSubtitle } from './ComponentsListStyled'


export default function ComponentsList(props) {
    const {title, items} = props;

    const [expanded, setExpanded] = useState(false);
    const [activeItemId, setActiveItemId] = useState(null);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();

    const listItems = items && items.map(item => {
        return item.isSubtitle
            ? (
                <ComponentsUlSubtitle key={item.id}>{item.name}</ComponentsUlSubtitle>
            )
            : (
                <ComponentsLi 
                    key={item.id} 
                    isActive={item.id === activeItemId} 
                    onClick={() => {
                        setActiveItemId(item.id);
                        if (activeComponent) {
                            const id = generateNewId(10);
                            dispatch(addComponent({
                                typeName: 'label',
                                id,
                                value: 'Label',
                                styles: {
                                    common: {}
                                },
                                childrenList: []
                            }))
                            dispatch(
                                putComponent(
                                    activeComponent.id,
                                    {
                                        typeName: 'label',
                                        id,
                                        value: 'Label',
                                        styles: {
                                            common: {}
                                        },
                                        childrenList: []
                                    }
                                )
                            );
                        }
                    }}
                >
                    {item.name}
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
                    {listItems}
                </ComponentsUlContent>

            </ComponentsUl>
        </ComponentsUlWrapper>
    )
}
