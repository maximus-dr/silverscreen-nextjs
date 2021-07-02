import React from 'react'
import Panel from '../Panel/Panel'
import { SidebarWrapper } from './SidebarLeftStyled'


export default function SidebarLeft() {
    return (
        <SidebarWrapper>
            <Panel title="Components" />
            <Panel title="Hierarchy" />
        </SidebarWrapper>
    )
}
