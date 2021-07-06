import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TreeNodeChildren, TreeNodeItem, TreeNodeItemName, TreeNodeItemType, TreeNodeWrapper } from "./TreeNodeStyled";


export default function TreeNode(props) {
    
    const hasChildren = props.nodeData.childrenList && props.nodeData.childrenList.length > 0;
    const isPage = props.nodeData.typeName === 'page';

    const [expanded, setExpanded] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();

    return (
        <TreeNodeWrapper>
            <TreeNodeItem 
                isActive={isActive}
                onClick={() => {
                    setIsActive(prev => !prev);
                    dispatch({type: 'SET_ACTIVE_COMPONENT', activeComponent: props.nodeData});
                }}
            >
                <TreeNodeItemType
                    isRootItem={props.nodeData.typeName === 'Document'}
                    isPage={props.nodeData.typeName === 'page'}
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
                </TreeNodeItemType>
                <TreeNodeItemName 
                    isActive={isActive}
                    isPage={isPage}    
                >
                    {props.nodeData.name}
                </TreeNodeItemName>
            </TreeNodeItem>
            <TreeNodeChildren expanded={expanded}>
                {props.children}
            </TreeNodeChildren>
        </TreeNodeWrapper>
    )
}
