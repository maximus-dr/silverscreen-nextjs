import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateNewId } from "../../../../../core/functions/components";
import { addComponent, deleteComponent, setActiveComponent, unsetActiveComponent, addComponentToList, deleteComponentFromList } from "../../../../../store/actions/document";
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
                minHeight: '200px'
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



export default function Tree(props) {

    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();

    const hasChildren = props.nodeData.childrenList && props.nodeData.childrenList.length > 0;
    const isRootItem = props.nodeData.typeName === 'Document';
    const isPage = props.nodeData.typeName === 'page';
    const isActive = activeComponent && props.nodeData.id === activeComponent.id;

    const components = useSelector(state => state.document.components);
    const [expanded, setExpanded] = useState(false);

    const childrenLength = props.nodeData.childrenList.length;

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
								dispatch(deleteComponentFromList(activeComponent.id));
            }
        }
        if (isActive) {
            document.addEventListener('keydown', onDeleteKeydown);
        }
        return () => {
            document.removeEventListener('keydown', onDeleteKeydown);
        }
    }, [isActive, activeComponent, dispatch]);


    const onDragStart = (e, componentId) => {
        e.dataTransfer.setData('componentId', componentId);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, targetId, componentsList) => {
        const componentId = e.dataTransfer.getData('componentId');
        const templateId = e.dataTransfer.getData('templateId');
        if (componentId === targetId) return;
        if (componentId) {
            const component = componentsList[componentId];
						dispatch(unsetActiveComponent());
            dispatch(deleteComponent(componentId));
						dispatch({type: 'DELETE_FROM_COMPONENTS_LIST', componentId});
            dispatch(addComponent(targetId, component));
        }
        if (templateId) {
            const template = templates[templateId];
            const id = generateNewId(10);
            dispatch(addComponentToList({id, ...template}));
            dispatch(addComponent(targetId, {id, ...template}));
        }
    }


    return (
        <TreeWrapper>
            <TreeItemWrapper>
                <TreeItem
                    draggable
                    onDragStart={(e) => onDragStart(e, props.nodeData.id)}
                    onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDrop(e, props.nodeData.id, components)}
                    isActive={isActive}
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
                        {props.nodeData.typeName}
                    </TreeItemType>
                    <TreeItemName
                        isRootItem={isRootItem}
                        isPage={isPage}
                        isActive={isActive}
                    >
                        {components[props.nodeData.id] && components[props.nodeData.id].name}
                    </TreeItemName>
                </TreeItem>
            </TreeItemWrapper>
            <TreeChildren expanded={expanded}>
                {props.children}
            </TreeChildren>
        </TreeWrapper>
    )
}
