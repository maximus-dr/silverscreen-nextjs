import styled, {css} from 'styled-components';


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

const TreeNodeItemName = styled.span`
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

export {
    TreeNodeWrapper,
    TreeNodeItem,
    TreeNodeItemType,
    TreeNodeItemName,
    TreeNodeChildren
}
