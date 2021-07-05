import React from 'react'
import ComponentsPanel from '../Panels/ComponentsPanel/ComponentsPanel'
import DocumentPanel from '../Panels/DocumentPanel/DocumentPanel'
import { SidebarWrapper } from './SidebarLeftStyled'


export default function SidebarLeft() {
    return (
        <SidebarWrapper>
            <ComponentsPanel />
            <DocumentPanel />
        </SidebarWrapper>
    )
}
