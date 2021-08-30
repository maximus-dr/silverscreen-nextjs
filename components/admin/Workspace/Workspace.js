import React from 'react'
import { useSelector } from 'react-redux'
import { modals } from '../Modal';
import Overlay from '../Modal/Overlay/Overlay';
import PanelTools from '../Panels/PanelTools/PanelTools';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'



export default function Workspace(props) {

    const {components, resolution} = props;
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
