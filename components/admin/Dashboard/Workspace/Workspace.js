import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { renderComponents, getComponentsList } from '../../../../core/functions/render';
import Screens from './Screens/Screens';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'



export default function Workspace() {

    const componentsData = useSelector(state => state.document.componentsData);
    const components = renderComponents(componentsData);

    const resolution = useSelector(state => state.document.resolution);


    const [screen, setScreen] = useState('1200');

    return (
        <WorkspaceWrapper>
            <WorkspacePageWrapper>
                <Screens screen={screen} setScreen={setScreen} />
                <WorkspacePage pageWidth={`${screen}px`}>
                    {components}
                    {/* <Test /> */}
                </WorkspacePage>
            </WorkspacePageWrapper>
        </WorkspaceWrapper> 
    )
}
