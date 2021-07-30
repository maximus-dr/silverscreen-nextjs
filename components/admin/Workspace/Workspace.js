import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { renderComponents } from '../../../core/functions/render';
import DragNDrop from '../dnd/example 1/DragNDrop';
import Dnd2 from '../dnd/example 2/Dnd2';
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
                    <DragNDrop />
                    <Dnd2 />
                </WorkspacePage>
            </WorkspacePageWrapper>
        </WorkspaceWrapper> 
    )
}
