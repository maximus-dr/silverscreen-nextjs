import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, unsetActiveComponent } from "../../../../../../store/actions/document";
import { DocumentTreeChildren, DocumentTreeItem, DocumentTreeItemName, DocumentTreeItemType, DocumentTreeItemWrapper, DocumentTreeWrapper } from "./DocumentTreeStyled";



export default function DocumentTree(props) {

    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();
    
    const hasChildren = props.nodeData.childrenList && props.nodeData.childrenList.length > 0;
    const isRootItem = props.nodeData.typeName === 'Document';
    const isPage = props.nodeData.typeName === 'page';
    const isActive = activeComponent && props.nodeData.id === activeComponent.id;

    const components = useSelector(state => state.document.components);

    const [expanded, setExpanded] = useState(false);


    return (
        <DocumentTreeWrapper>
            <DocumentTreeItemWrapper>
                <DocumentTreeItem 
                    isActive={isActive}
                    onClick={() => {
                        if (isActive) {
                            dispatch(unsetActiveComponent());
                            return
                        }
                        dispatch(setActiveComponent(props.nodeData));
                    }}
                >
                    <DocumentTreeItemType
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
                    </DocumentTreeItemType>
                    <DocumentTreeItemName
                        isRootItem={isRootItem}
                        isPage={isPage}    
                        isActive={isActive}
                    >
                        {components[props.nodeData.id].name}
                    </DocumentTreeItemName>
                </DocumentTreeItem>
            </DocumentTreeItemWrapper>
            <DocumentTreeChildren expanded={expanded}>
                {props.children}
            </DocumentTreeChildren>
        </DocumentTreeWrapper>
    )
}
