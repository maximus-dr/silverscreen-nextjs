import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { renderComponents } from '../../../core/functions/render';
import { modals } from '../Modal';
import Notification from '../Modal/Notification/Notification';
import Overlay from '../Modal/Overlay/Overlay';
import SaveTemplateModal from '../Modal/SaveTemplate/SaveTemplateModal';
import PanelTools from '../Panels/PanelTools/PanelTools';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'



export default function Workspace() {

    const componentsData = useSelector(state => state.document.componentsData);
    const components = renderComponents(componentsData);
    const resolution = useSelector(state => state.document.resolution);

    const modalName = useSelector(state => state.document.modal);
    const modal = {
        el: modals[modalName]
    }


    return (
        <>
            <WorkspaceWrapper>
                <WorkspacePageWrapper>
                    <WorkspacePage pageWidth={`${resolution}px`}>
                        {components}
                    </WorkspacePage>

                    <PanelTools />
                    {/* <Notification /> */}

                    <Overlay isOpen={modalName}>
                        {modal.el && <modal.el isOpen={modalName} />}
                    </Overlay>
                </WorkspacePageWrapper>
            </WorkspaceWrapper>
        </>
    )
}
