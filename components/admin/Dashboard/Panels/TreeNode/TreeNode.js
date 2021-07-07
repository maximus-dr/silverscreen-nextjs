import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, unsetActiveComponent } from "../../../../../store/actions/document";
import { TreeNodeChildren, TreeNodeItem, TreeNodeItemName, TreeNodeItemType, TreeNodeItemWrapper, TreeNodeWrapper } from "./TreeNodeStyled";


export default function TreeNode(props) {

    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();
    
    const hasChildren = props.nodeData.childrenList && props.nodeData.childrenList.length > 0;
    const isRootItem = props.nodeData.typeName === 'Document';
    const isPage = props.nodeData.typeName === 'page';
    const isActive = activeComponent && props.nodeData.id === activeComponent.id;

    const [expanded, setExpanded] = useState(true);


    return (
        <TreeNodeWrapper>
            <TreeNodeItemWrapper>
                <TreeNodeItem 
                    isActive={isActive}
                    onClick={() => {
                        if (isActive) {
                            dispatch(unsetActiveComponent());
                            return
                        }
                        dispatch(setActiveComponent(props.nodeData));
                    }}
                >
                    <TreeNodeItemType
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
                    </TreeNodeItemType>
                    <TreeNodeItemName
                        isRootItem={isRootItem}
                        isPage={isPage}    
                        isActive={isActive}
                    >
                        {props.nodeData.name}
                    </TreeNodeItemName>
                </TreeNodeItem>
            </TreeNodeItemWrapper>
            <TreeNodeChildren expanded={expanded}>
                {props.children}
            </TreeNodeChildren>
        </TreeNodeWrapper>
    )
}
