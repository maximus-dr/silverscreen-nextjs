import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, unsetActiveComponent } from "../../../../../store/actions/document";
import { TreeChildren, TreeItem, TreeItemName, TreeItemType, TreeItemWrapper, TreeWrapper } from "./DocumentTreeStyled";



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

    
    return (
        <TreeWrapper>
            <TreeItemWrapper>
                <TreeItem 
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
                        {components[props.nodeData.id].name}
                    </TreeItemName>
                </TreeItem>
            </TreeItemWrapper>
            <TreeChildren expanded={expanded}>
                {props.children}
            </TreeChildren>
        </TreeWrapper>
    )
}
