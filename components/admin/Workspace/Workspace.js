import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { unsetActiveComponent } from '../../../store/actions/document';
import { setFilter } from '../../../store/actions/filters';
import { modals } from '../Modal';
import Overlay from '../Modal/Overlay/Overlay';
import PanelTools from '../Panels/PanelTools/PanelTools';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'



export default function Workspace(props) {

    const {components, resolution, modal} = props;
    const modalName = useSelector(state => state.document.modal);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();
    const adminModals = {
        el: modals[modalName]
    }

    return (
        <>
            <WorkspaceWrapper>
                <WorkspacePageWrapper onMouseDown={(e) => {
                    if (activeComponent) dispatch(unsetActiveComponent());
                }}>
                    <WorkspacePage onMouseDown={(e) => e.stopPropagation()} pageWidth={`${resolution}px`}>

                        <button onClick={() => {
                            dispatch(setFilter('shedule', 'now'));
                        }}>
                            Сейчас
                        </button>
                        <button onClick={() => {
                            dispatch(setFilter('shedule', 'soon'));
                        }}>
                            Скоро
                        </button>

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
