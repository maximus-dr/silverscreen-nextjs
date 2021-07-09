import React from 'react'
import { useSelector } from 'react-redux'
import { renderComponents } from '../../../../core/functions/render';
import AddField from './AddField/AddField'
import { WorkspaceWrapper } from './WorkspaceStyled'


export default function Workspace() {

    const componentsData = useSelector(state => state.document.components);
    const components = renderComponents(componentsData);

    return (
        <WorkspaceWrapper>
            {/* <AddField /> */}
            <div style={{width: '100%', overflow: 'hidden', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'}}>
                <div>
                    {components}
                </div>
            </div>
            
        </WorkspaceWrapper>
    )
}
