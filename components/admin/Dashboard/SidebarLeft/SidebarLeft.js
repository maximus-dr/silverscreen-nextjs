import React from 'react'
import PanelComponents from '../Panels/PanelComponents/PanelComponents'
import PanelDocument from '../Panels/PanelDocument/PanelDocument'
import { SidebarWrapper } from './SidebarLeftStyled'


export default function SidebarLeft() {
    return (
        <SidebarWrapper>
            <PanelComponents />
            <PanelDocument />
        </SidebarWrapper>
    )
}
