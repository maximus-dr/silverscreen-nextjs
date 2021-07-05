import React from 'react'
import { PanelLi, PanelUl, PanelUlCaption } from './PanelListStyled'


export default function PanelList(props) {
    const {title, items} = props;

    const listItems = items && items.map(item => {
        return (
            <PanelLi key={item}>{item}</PanelLi>
        );
    })

    return (
        <PanelUl>
            <PanelUlCaption>{title}</PanelUlCaption>
            {listItems}
        </PanelUl>
    )
}
