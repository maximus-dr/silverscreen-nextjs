import React, { useState } from "react";
import { TreeNodeChildren, TreeNodeItem, TreeNodeItemName, TreeNodeItemType, TreeNodeWrapper } from "./TreeNodeStyled";


export default function TreeNode(props) {
    
    const hasChildren = props.nodeData.childrenList && props.nodeData.childrenList.length > 0;

    const [expanded, setExpanded] = useState(true);
    const [isActive, setIsActive] = useState(false);


    return (
        <TreeNodeWrapper>
            <TreeNodeItem isActive={isActive} onClick={() => setIsActive(prev => !prev)}>
                <TreeNodeItemType
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
                <TreeNodeItemName isActive={isActive}>
                    {props.nodeData.name}
                </TreeNodeItemName>
            </TreeNodeItem>
            <TreeNodeChildren expanded={expanded}>
                {props.children}
            </TreeNodeChildren>
        </TreeNodeWrapper>
    )
}
