import React from 'react'
import { useSelector } from 'react-redux'
import { renderComponents } from '../../../../core/functions/render';
import AddField from './AddField/AddField'
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'


export default function Workspace() {

    const componentsData = useSelector(state => state.document.components);
    const components = renderComponents(componentsData);

    const resolution = useSelector(state => state.styles.resolution);
    const pageWrapperWidth = resolution ? resolution + 100 + 'px' : '1300px';
    const pageWidth = resolution ? resolution + 'px' : '1200px';

    console.log(pageWidth);
    console.log(pageWrapperWidth);

    return (
        <WorkspaceWrapper>
            <WorkspacePageWrapper width={pageWrapperWidth}>
                <WorkspacePage width={pageWidth}>
                    {components}
                </WorkspacePage>
            </WorkspacePageWrapper>
        </WorkspaceWrapper> 
    )
}
