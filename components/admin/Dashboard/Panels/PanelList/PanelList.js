import React from 'react'
import { PanelLi, PanelUl, PanelUlCaption } from './PanelListStyled'


export default function PanelList(props) {
    return (
        <PanelUl>
            <PanelUlCaption>Category</PanelUlCaption>
            <PanelLi>Item</PanelLi>
            <PanelLi>Item</PanelLi>
            <PanelLi>Item</PanelLi>
            <PanelLi>Item</PanelLi>
            <PanelLi>Item</PanelLi>
        </PanelUl>
    )
}
