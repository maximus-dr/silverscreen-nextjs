import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { renderComponents } from '../../../core/functions/render';
import Screens from './Screens/Screens';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'



export default function Workspace() {

    const componentsData = useSelector(state => state.document.componentsData);
    const components = renderComponents(componentsData);


    const [screen, setScreen] = useState('320');

    return (
        <WorkspaceWrapper>
            <WorkspacePageWrapper>
                <Screens screen={screen} setScreen={setScreen} />
                <WorkspacePage pageWidth={`${screen}px`}>
                    {components}
                </WorkspacePage>
            </WorkspacePageWrapper>
        </WorkspaceWrapper>
    )
}
