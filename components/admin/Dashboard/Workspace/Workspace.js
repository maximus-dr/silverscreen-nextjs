import React from 'react'
import { useSelector } from 'react-redux'
import { renderComponents } from '../../../../core/functions/render';
import AddField from './AddField/AddField'
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'


export default function Workspace() {

    const componentsData = useSelector(state => state.document.components);
    const components = renderComponents(componentsData);

    return (
        <WorkspaceWrapper>
            <WorkspacePageWrapper>
                <WorkspacePage>
                    {components}
                </WorkspacePage>
            </WorkspacePageWrapper>
        </WorkspaceWrapper> 
    )
}
