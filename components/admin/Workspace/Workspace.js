import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { renderComponents } from '../../../core/functions/render';
import Notification from '../Notifications/Notification/Notification';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'



export default function Workspace() {

    const componentsData = useSelector(state => state.document.componentsData);
    const components = renderComponents(componentsData);
    const resolution = useSelector(state => state.document.resolution);


    return (
        <WorkspaceWrapper>
            <WorkspacePageWrapper>
                <WorkspacePage pageWidth={`${resolution}px`}>
                    {components}
                </WorkspacePage>

                {/* <Notification /> */}
            </WorkspacePageWrapper>
        </WorkspaceWrapper>
    )
}
