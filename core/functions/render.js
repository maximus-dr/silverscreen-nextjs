import { Provider } from '../../components';
import styled, {css} from 'styled-components';
import { useState } from 'react';


export function renderComponents(componentData) {
    const props = {
        componentData,
        id: componentData.id,
        component: Provider[componentData.typeName]
    }

    return getComponents(props);
}


// рекурсивно перебирает childrenList в структуре и возвращает массив компонентов по typeName
function getComponents(props) {

    if (!props.componentData) return;
    if (!props.componentData.id) console.log(`Не задан id у компонента ${props.componentData.typeName}`);

    const getChildrenComponents = (props) => {
        return (
        props.componentData.childrenList &&
        props.componentData.childrenList.length > 0 &&
        props.componentData.childrenList.map(child => {
            const component = Provider[child.typeName];

            if (component) {
            const childProps = {
                id: child.id,
                component: Provider[child.typeName],
                componentData: child
            }
            return getComponents(childProps);
            }

            if (!component) {
            console.log(`Компонент "${child.typeName}" не найден. Проверьте компонент id: ${props.componentData.id}`);
            }
        }));
    }

    const result = (
        <props.component key={props.id} componentData={props.componentData}>
            { getChildrenComponents(props) }
        </props.component>
    );

    return result;
}

const TreeNodeWrapper = styled.div`
    position: relative;
    padding: 2px;
    padding-left: 10px;
`;

const TreeNodeItem = styled.div`
    transition: font-weight 10ms;

    &:hover {
        outline: 1px dashed #1976d2;
        background-color: rgba(0, 0, 0, 0.04);
    }

    ${props => {
        return props.isActive && css`
            background-color: #42a5f5;
            color: #000000;

            &:hover {
                background-color: #42a5f5;
                color: #000000;
            }
        `;
    }}
`;

const TreeNodeItemType = styled.span`
    display: inline-block;
    padding: 1px;
    padding-right: 5px;

    ${props => {
        return props.hasChildren && css`
            cursor: pointer;
            
            &:before {
                content: '';
                position: absolute;
                top: 7px;
                left: 3px;
                width: 0;
                height: 0;
                border: 3px solid transparent;
                border-left: 3px solid rgba(0, 0, 0, 0.5);
                border-right: none;
                transition: transform 100ms;
            }


            &:hover:before {
                border-left: 3px solid #1976d2;
            }

            &:hover {
                color: #115293;
            }
        `
    }}

    ${props => {
        return props.expanded && css`
            &:before {
                transform: rotate(90deg);
            }
        `
    }}

    ${props => {
        return props.isActive && props.hasChildren && css`
            &:hover {
                color: #000000;
            }

            &:hover:before {
                border-left: 3px solid #000000;
            }
        `
    }}
`;

export const TreeNodeItemName = styled.span`
    color: #64b5f6;
    font-size: 12px;

    ${props => {
        return props.isActive && css`
            color: #ffffff;
        `
    }}
`;

const TreeNodeChildren = styled.div`
    display: block;
    ${props => {
        return !props.expanded && css`
            display: none;
        `
    }}
`;


export function TreeNode(props) {
    
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






export function renderDocumentTree(nodeData) {
    const props = {
        nodeData,
        id: nodeData.id,
        component: TreeNode
    }

    return <GetTreeNodes {...props} />;
}

export function GetTreeNodes(props) {

    if (!props.nodeData) return;

    const getChildNodes = (props) => {
        return (
            props.nodeData.childrenList &&
            props.nodeData.childrenList.length > 0 &&
            props.nodeData.childrenList.map(child => {

                const childProps = {
                    nodeData: child,
                    id: child.id,
                    component: TreeNode
                }
                return <GetTreeNodes key={child.id} {...childProps} />;
            })
        )
    }

    let handler;

    if (props.nodeData.childrenList && props.nodeData.childrenList.length > 0) {
        handler = () => {
            setExpanded(prev => !prev);
        };
    }

    const result = (
        <props.component key={props.id} nodeData={props.nodeData} onClick={handler} >
            {getChildNodes(props)}
        </props.component>
    );

    return result;
}
