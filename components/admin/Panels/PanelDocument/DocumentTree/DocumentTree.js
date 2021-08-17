import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateNewId, getChild, getComponent, getParent } from "../../../../../core/functions/components";
import { addComponent, deleteComponent, setActiveComponent, unsetActiveComponent, deleteComponentFromList, setDragendComponent, unsetDragendComponent, updateComponentChildrenList } from "../../../../../store/actions/document";
import { TreeChildren, TreeItem, TreeItemName, TreeItemType, TreeWrapper } from "./DocumentTreeStyled";


export const templates = {
    p1: {
        typeName: "page",
        name: "default",
        styles: {
            common: {
                paddingTop: '5px',
                paddingRight: '5px',
                paddingBottom: '5px',
                paddingLeft: '5px',
                border: '1px dashed rgba(0, 0, 0, 0.8)',
                minHeight: '100vh',
                backgroundColor: "#ffffff"
            }
        },
        childrenList: []
    },
    sec01: {
        typeName: "section",
        name: "default",
        styles: {
            common: {
                paddingTop: '15px',
                paddingRight: '15px',
                paddingBottom: '15px',
                paddingLeft: '15px',
                "minHeight": '50px',
                "border": "1px dashed #42a5f5"
            }
        },
        childrenList: []
    },
    lab001: {
        typeName: "label",
        name: "default",
        value: 'Label',
        styles: {
            common: {
                display: 'inline-block',
                paddingTop: '5px',
                paddingRight: '5px',
                paddingBottom: '5px',
                paddingLeft: '5px',
                marginTop: '0px',
                marignBottom: '0px',
                "fontSize": "22px"
            }
        },
        childrenList: []
    }
}



export default function DocumentTree(props) {

    const { nodeData } = props;

    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();

    const hasChildren = props.nodeData.childrenList && props.nodeData.childrenList.length > 0;
    const isRootItem = props.nodeData.typeName === 'Document';
    const isPage = props.nodeData.typeName === 'page';
    const isActive = activeComponent && props.nodeData.id === activeComponent.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const [expanded, setExpanded] = useState(false);

    const [dragCounter, setDragCounter] = useState(0);
    const [allowDrop, setAllowDrop] = useState(false);

    const childrenLength = props.nodeData.childrenList.length;


    const checkAllowDrop = (dragendComponent, dropTarget) => {
        if (getChild(dragendComponent, dropTarget.id)) {
            return false;
        }
        if (dropTarget.typeName === 'label' && dropTarget.id !== dragendComponent.id) return false;
        if (dropTarget.typeName === 'Document' && dragendComponent.typeName !== 'page') return false;
        if (dragendComponent.typeName === 'page' && dropTarget.typeName !== 'Document') {
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
                setAllowDrop(checkAllowDrop(dragendComponent, props.nodeData));
            }
        }
    }, [dragCounter, dragendComponent, props.nodeData]);


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

        if (props.nodeData.id === dragendComponent.id) return;

        if (e.altKey) {
            if (!Array.from(e.target.children).find(item => item.id === dragendComponent.id)) {
                Array.from(e.target.children).forEach(item => item.style.pointerEvents = 'none');
            };
            const parent = getParent(componentsData, props.nodeData.id);
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
        const templateId = e.dataTransfer.getData('templateId');

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
        if (templateId) {
            const template = templates[templateId];
            const id = generateNewId(10);
            dispatch(addComponent(targetId, {id, ...template}));
        }
        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
    }


    return (
        <TreeWrapper>
                <TreeItem
                    id={`tree-${props.nodeData.id}`}
                    draggable
                    onDragStart={(e) => onDragStart(e, props.nodeData.id)}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragOver={(e) => onDragOver(e)}
                    onDragEnd={onDragEnd}
                    onDrop={(e) => onDrop(e, props.nodeData.id)}
                    isRootItem={isRootItem}
                    isActive={isActive}
                    allowDrop={allowDrop}
                    onClick={() => {
                        if (isActive) {
                            dispatch(unsetActiveComponent());
                            return
                        }
                        dispatch(setActiveComponent(props.nodeData));
                    }}
                >
                    <TreeItemType
                        isRootItem={isRootItem}
                        isPage={isPage}
                        isActive={isActive}
                        hasChildren={hasChildren}
                        expanded={expanded}
                        onDragStart={(e) => e.preventDefault()}
                        onClick={(e) => {
                            e.preventDefault();
                            hasChildren && e.stopPropagation();
                            setExpanded(prev => !prev);
                        }}
                    >
                        {nodeData.typeName}
                    </TreeItemType>
                    <TreeItemName
                        isRootItem={isRootItem}
                        isPage={isPage}
                        isActive={isActive}
                    >
                        {nodeData.name}
                    </TreeItemName>
                </TreeItem>
            <TreeChildren expanded={expanded}>
                {props.children}
            </TreeChildren>
        </TreeWrapper>
    )
}
