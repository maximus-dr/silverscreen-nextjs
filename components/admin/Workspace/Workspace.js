import React from 'react'
import { useSelector } from 'react-redux'
import { modals } from '../Modal';
import Overlay from '../Modal/Overlay/Overlay';
import PanelTools from '../Panels/PanelTools/PanelTools';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'



export default function Workspace(props) {

    const {components, resolution, modal} = props;
    const modalName = useSelector(state => state.document.modal);
    const adminModals = {
        el: modals[modalName]
    }

    return (
        <>
            <WorkspaceWrapper>
                <WorkspacePageWrapper>
                    <WorkspacePage pageWidth={`${resolution}px`}>
                        {components}
                        {modal}
                    </WorkspacePage>

                    <PanelTools />
                    {/* <Notification /> */}

                    <Overlay isOpen={modalName && modalName === 'saveTemplate'}>
                        {adminModals.el && <adminModals.el isOpen={modalName} />}
                    </Overlay>
                </WorkspacePageWrapper>
            </WorkspaceWrapper>
        </>
    )
}
