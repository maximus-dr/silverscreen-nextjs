import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateNewId, getChild, getComponent, getParent } from "../../../../../core/functions/components";
import { addComponent, deleteComponent, setActiveComponent, unsetActiveComponent, deleteComponentFromList, setDragendComponent, unsetDragendComponent } from "../../../../../store/actions/document";
import { TreeChildren, TreeItem, TreeItemName, TreeItemType, TreeItemWrapper, TreeWrapper } from "./DocumentTreeStyled";


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
        setDragCounter(prev => prev + 1);
        e.dataTransfer.dropEffect = allowDrop ?  e.dataTransfer.effectAllowed : 'none';
    }

    const onDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(prev => prev - 1);
    }

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = allowDrop ?  e.dataTransfer.effectAllowed : 'none';
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
    }


    return (
        <TreeWrapper>
            <TreeItemWrapper
                id={`tree-${props.nodeData.id}`}
            >
                <TreeItem
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
            </TreeItemWrapper>
            <TreeChildren expanded={expanded}>
                {props.children}
            </TreeChildren>
        </TreeWrapper>
    )
}
