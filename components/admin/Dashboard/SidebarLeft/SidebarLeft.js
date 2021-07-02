import React from 'react'
import Panel from '../Panels/Panel/Panel'
import PanelList from '../Panels/PanelList/PanelList'
import { SidebarWrapper } from './SidebarLeftStyled'


export default function SidebarLeft() {
    return (
        <SidebarWrapper>
            <Panel title="Components">
                <PanelList />
                <PanelList />
                <PanelList />
            </Panel>
            <Panel title="Hierarchy" />
        </SidebarWrapper>
    )
}
