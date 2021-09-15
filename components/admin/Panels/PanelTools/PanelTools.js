import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { updateComponentIds } from '../../../../core/functions/admin/components';
import { getParent } from '../../../../core/functions/common/components';
import { addComponent, addComponentToActive, deleteComponent, setActiveComponent, setComponentToBuffer, setModal, unsetActiveComponent, updateComponentChildrenList } from '../../../../store/actions/document';
import { ToolsButton, ToolsFixWrapper, ToolsItem, ToolsWrapper } from './PanelToolsStyled';


export default function PanelTools() {

    const dispatch = useDispatch();
    const activeComponent = useSelector(state => state.document.activeComponent);
    const bufferedComponent = useSelector(state => state.document.buffer);
    const componentsData = useSelector(state => state.document.componentsData);

    if (!activeComponent) return null;

    const parent = getParent(componentsData, activeComponent.id);
    const lastChild = parent && parent.childrenList[parent.childrenList.length - 1];

    const isOnlyChild = parent && parent.childrenList.length === 1;
    const isLastChild = activeComponent === lastChild;
    const isFirstChild = parent && parent.childrenList.indexOf(activeComponent) === 0;

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

    const onUpClick = () => {
        const outerParent = getParent(componentsData, parent.id);
        dispatch(unsetActiveComponent());
        dispatch(deleteComponent(activeComponent.id));
        dispatch(setActiveComponent(activeComponent));
        dispatch(addComponent(outerParent.id, activeComponent));
    }


    const onBackwardClick = () => {
        let index;
        parent.childrenList.forEach((item, i) => {
            if (item.id === activeComponent.id) index = i;
        });
        const parentCopy = {
            ...parent,
            childrenList: [...parent.childrenList]
        }
        parentCopy.childrenList.splice(index, 1);
        parentCopy.childrenList.splice(index - 1, 0, activeComponent);
        dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
    }

    const onForwardClick = () => {
        let index;
        parent.childrenList.forEach((item, i) => {
            if (item.id === activeComponent.id) index = i;
        });
        const parentCopy = {
            ...parent,
            childrenList: [...parent.childrenList]
        }
        parentCopy.childrenList.splice(index, 1);
        parentCopy.childrenList.splice(index + 1, 0, activeComponent);
        dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
    }

    const onSaveClick = async () => {
        dispatch(setModal('saveTemplate'));
    }

    const onTemplatesClick = async () => {
        const response = await fetch('/api/templates');
        const data = await response.json();
    }


    return activeComponent &&
        activeComponent.typeName !== 'pages' &&
        activeComponent.typeName !== 'modals' &&
        parent ? (
        <ToolsWrapper onMouseDown={(e) => e.stopPropagation()}>
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
                        disabled={parent && parent.typeName === 'page'}
                        onClick={onUpClick}
                    >
                        up
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
                <ToolsItem>
                    <ToolsButton
                        onClick={onSaveClick}
                    >
                        save
                    </ToolsButton>
                </ToolsItem>
            </ToolsFixWrapper>
        </ToolsWrapper>
    ) : null;
}
