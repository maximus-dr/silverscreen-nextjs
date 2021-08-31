import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChild, getComponent, getParent } from "../../../../../../core/functions/components";
import { addComponent, deleteComponent, setActiveComponent, unsetActiveComponent, setDragendComponent, unsetDragendComponent, updateComponentChildrenList, addComponentToActive, setPage, setModal } from "../../../../../../store/actions/document";
import { TreeChildren, Item, TreeItemName, TreeItemType, TreeWrapper } from "./TreeItemStyled";



export default function TreeItem(props) {

    const { nodeData } = props;

    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.document.page);

    const hasChildren = nodeData.childrenList && nodeData.childrenList.length > 0;
    const isRootItem = nodeData.typeName === 'Document';
    const isPage = nodeData.typeName === 'page';
    const isCurrentPage = nodeData.id === currentPage;
    const isActive = activeComponent && nodeData.id === activeComponent.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const [expanded, setExpanded] = useState(false);

    const [dragCounter, setDragCounter] = useState(0);
    const [allowDrop, setAllowDrop] = useState(false);

    const childrenLength = nodeData.childrenList.length;


    const checkAllowDrop = (dragendComponent, dropTarget) => {
        if (getChild(dragendComponent, dropTarget.id)) {
            return false;
        }
        if (dropTarget.typeName === 'label' && dropTarget.id !== dragendComponent.id) return false;
        if (dropTarget.typeName === 'Document') return false;
        if (dragendComponent.typeName === 'page' && dropTarget.typeName !== 'pages') {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (dragendComponent) {
            if (dragCounter === 0) {
                setAllowDrop(false);
            }
            else {
                setAllowDrop(checkAllowDrop(dragendComponent, nodeData));
            }
        }
    }, [dragCounter, dragendComponent, nodeData]);


    // разворачивает список при добавлении новых элементов в него
    useEffect(() => {
        if (childrenLength > 0) {
            setExpanded(true);
        }
    }, [childrenLength]);


    // удаляет активный компонент при нажатии delete
    useEffect(() => {
        const onDeleteKeydown = (e) => {
            if (e.code === 'Delete') {
				dispatch(unsetActiveComponent());
                dispatch(deleteComponent(activeComponent.id));
            }
        }
        if (isActive) {
            document.addEventListener('keydown', onDeleteKeydown);
        }
        return () => {
            document.removeEventListener('keydown', onDeleteKeydown);
        }
    }, [isActive, activeComponent, dispatch, componentsData]);


    const onDragStart = (e, componentId) => {
        dispatch(setDragendComponent(nodeData));
        e.target.style.opacity = '0.4';
        e.dataTransfer.setData('componentId', componentId);
        e.dataTransfer.effectAllowed = 'move';
    }

    const onDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.altKey) setDragCounter(prev => prev + 1);
        if (!e.altKey) e.dataTransfer.dropEffect = allowDrop ?  e.dataTransfer.effectAllowed : 'none';

        if (nodeData.id === dragendComponent.id) return;

        if (e.altKey) {
            if (!Array.from(e.target.children).find(item => item.id === dragendComponent.id)) {
                Array.from(e.target.children).forEach(item => item.style.pointerEvents = 'none');
            };
            const parent = getParent(componentsData, nodeData.id);
            const hasCommonParent = parent && parent.childrenList.includes(dragendComponent);

            if (hasCommonParent) {
                const index = parent.childrenList.indexOf(nodeData);
                const parentCopy = {
                    ...parent,
                    childrenList: [...parent.childrenList]
                }
                parentCopy.childrenList.splice(parentCopy.childrenList.indexOf(dragendComponent), 1);
                parentCopy.childrenList.splice(index, 0, dragendComponent);
                dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
            }
        }
    }

    const onDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.altKey) setDragCounter(prev => prev - 1);

        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
    }

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.altKey) e.dataTransfer.dropEffect = allowDrop ?  e.dataTransfer.effectAllowed : 'none';
    }

    const onDragEnd = (e) => {
        e.target.style.opacity = '1';
        setAllowDrop(false);
        setDragCounter(0);
        if (dragendComponent) {
            dispatch(unsetDragendComponent());
        }
    }

    const onDrop = (e, targetId) => {
        const componentId = e.dataTransfer.getData('componentId');
        const template = e.dataTransfer.getData('template');

        setAllowDrop(false);
        setDragCounter(0);

        if (targetId === componentId) return;
        if (e.altKey) return;
        if (componentId) {
            const component = getComponent(componentsData, componentId);
            if (component.childrenList.find(item => item.id === targetId)) return;
            dispatch(deleteComponent(componentId));
            dispatch(addComponent(targetId, component));
        }
        if (template) {
            if (template === 'Страница') return;
            activeComponent && dispatch(addComponentToActive(dragendComponent));
            dispatch(addComponent(targetId, dragendComponent));
        }
        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
        if (nodeData.typeName === 'page' && nodeData.id !== currentPage) {
            dispatch(setPage(nodeData.id));
        };
    }

    const onClick = (e) => {
        if (isActive) {
            dispatch(unsetActiveComponent());
            return
        }
        dispatch(setActiveComponent(nodeData));
        if (nodeData.typeName === 'page') {
            dispatch(setPage(nodeData.id));
        }
    }

    const onItemTypeClick = (e) => {
        e.preventDefault();
        hasChildren && e.stopPropagation();
        setExpanded(prev => !prev);
    }


    return (
        <TreeWrapper onClick={(e) => {
            e.stopPropagation();
            if (nodeData.typeName !== 'page' && nodeData.typeName !== 'Document' && nodeData.typeName !== 'modals' && nodeData.typeName !== 'pages') {
                const closestPage = e.target.closest('[id^="page-children-');
                const pageId = closestPage && closestPage.id.replace('page-children-', '') || null;
                if (pageId && currentPage !== pageId) {
                    dispatch(setPage(pageId));
                }
            }
        }}>
                <Item
                    id={isPage ? `page-${nodeData.id}` : `node-${nodeData.id}`}
                    draggable={nodeData.typeName !== 'Document' && nodeData.typeName !== 'modals' && nodeData.typeName !== 'pages'}
                    onDragStart={(e) => onDragStart(e, nodeData.id)}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragOver={(e) => onDragOver(e)}
                    onDragEnd={onDragEnd}
                    onDrop={(e) => onDrop(e, nodeData.id)}
                    isRootItem={isRootItem}
                    isActive={isActive}
                    isCurrentPage={isCurrentPage}
                    allowDrop={allowDrop}
                    onClick={onClick}
                >
                    <TreeItemType
                        isRootItem={isRootItem}
                        isPage={isPage}
                        isActive={isActive}
                        isCurrentPage={isCurrentPage}
                        hasChildren={hasChildren}
                        expanded={expanded}
                        onDragStart={(e) => e.preventDefault()}
                        onClick={onItemTypeClick}
                    >
                        {nodeData.typeName}
                    </TreeItemType>
                    <TreeItemName
                        isRootItem={isRootItem}
                        isPage={isPage}
                        isActive={isActive}
                        isCurrentPage={isCurrentPage}
                    >
                        {nodeData.name}
                    </TreeItemName>
                </Item>
            <TreeChildren id={isPage ? `page-children-${nodeData.id}` : `node-children-${nodeData.id}`} expanded={expanded}>
                {props.children}
            </TreeChildren>
        </TreeWrapper>
    )
}
