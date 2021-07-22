import React, { useState } from 'react'
import { PanelLi, PanelUl, PanelUlCaption, PanelUlWrapper, PanelUlContent, PanelUlSubtitle } from './PanelListStyled'


export default function PanelList(props) {
    const {title, items} = props;

    const [expanded, setExpanded] = useState(false);
    const [activeItemId, setActiveItemId] = useState(null);


    const listItems = items && items.map(item => {
        return item.isSubtitle
            ? (
                <PanelUlSubtitle key={item.id}>{item.name}</PanelUlSubtitle>
            )
            : (
                <PanelLi key={item.id} isActive={item.id === activeItemId} onClick={() => setActiveItemId(item.id)}>{item.name}</PanelLi>
            );
    })

    return (
        <PanelUlWrapper>
            <PanelUl>
                <PanelUlCaption
                    expanded={expanded} 
                    onClick={() => {setExpanded(prev => !prev)}} 
                >
                    {title}
                </PanelUlCaption>
                
                <PanelUlContent expanded={expanded}>
                    {listItems}
                </PanelUlContent>

            </PanelUl>
        </PanelUlWrapper>
    )
}
