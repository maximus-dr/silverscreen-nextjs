import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { updateComponentIds } from '../../../../core/functions/admin/components';
import { getParent } from '../../../../core/functions/components';
import { addComponent, addComponentToActive, deleteComponent, setComponentToBuffer, unsetActiveComponent, updateComponentChildrenList } from '../../../../store/actions/document';
import { ToolsButton, ToolsFixWrapper, ToolsItem, ToolsWrapper } from './PanelToolsStyled'

export default function PanelTools() {

    const dispatch = useDispatch();
    const activeComponent = useSelector(state => state.document.activeComponent);
    const bufferedComponent = useSelector(state => state.document.buffer);
    const componentsData = useSelector(state => state.document.componentsData);

    if (!activeComponent) return null;

    const parent = getParent(componentsData, activeComponent.id);
    const lastChild = parent.childrenList[parent.childrenList.length - 1];
    const index = parent.childrenList.indexOf(activeComponent);

    const isOnlyChild = parent.childrenList.length === 1;
    const isLastChild = activeComponent === lastChild;
    const isFirstChild = parent.childrenList.indexOf(activeComponent) === 0;



    const onCopyClick = () => {
        dispatch(setComponentToBuffer(activeComponent));
    }

    const onCutClick = () => {
        dispatch(setComponentToBuffer(activeComponent));
        dispatch(unsetActiveComponent());
        dispatch(deleteComponent(activeComponent.id));
    }

    const onPasteClick = () => {
        const componentCopy = updateComponentIds({...bufferedComponent});
        dispatch(addComponent(activeComponent.id, componentCopy));
        dispatch(addComponentToActive(componentCopy));
    }

    const onDeleteClick = () => {
        dispatch(unsetActiveComponent());
        dispatch(deleteComponent(activeComponent.id));
    }

    const onBackwardClick = () => {
        const parentCopy = {
            ...parent,
            childrenList: [...parent.childrenList]
        }
        parentCopy.childrenList.splice(index, 1);
        parentCopy.childrenList.splice(index - 1, 0, activeComponent);
        dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
    }

    const onForwardClick = () => {
        const parentCopy = {
            ...parent,
            childrenList: [...parent.childrenList]
        }
        parentCopy.childrenList.splice(index, 1);
        parentCopy.childrenList.splice(index + 1, 0, activeComponent);
        dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
    }


    return activeComponent ? (
        <ToolsWrapper>
            <ToolsFixWrapper>
                <ToolsItem>
                    <ToolsButton
                        onClick={onCopyClick}
                    >
                        copy
                    </ToolsButton>
                </ToolsItem>
                <ToolsItem>
                    <ToolsButton
                        onClick={onCutClick}
                    >
                        cut
                    </ToolsButton>
                </ToolsItem>
                <ToolsItem>
                    <ToolsButton
                        disabled={!bufferedComponent}
                        onClick={onPasteClick}
                    >
                        paste
                    </ToolsButton>
                </ToolsItem>
                <ToolsItem>
                    <ToolsButton
                        onClick={onDeleteClick}
                    >
                        delete
                    </ToolsButton>
                </ToolsItem>
                <ToolsItem>
                    <ToolsButton
                        disabled={isOnlyChild || isFirstChild}
                        onClick={onBackwardClick}
                    >
                        back
                    </ToolsButton>
                </ToolsItem>
                <ToolsItem>
                    <ToolsButton
                        disabled={isOnlyChild || isLastChild}
                        onClick={onForwardClick}
                    >
                        forw
                    </ToolsButton>
                </ToolsItem>
            </ToolsFixWrapper>
        </ToolsWrapper>
    ) : null;
}
