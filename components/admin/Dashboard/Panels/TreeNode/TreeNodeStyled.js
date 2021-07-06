import styled, {css} from 'styled-components';


const TreeNodeWrapper = styled.div`
    position: relative;
    padding-left: 10px;
    padding-right: 1px;
`;

const TreeNodeItem = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
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
    text-align: center;
    padding: 1px;
    padding-right: 10px;
    font-weight: 500;
    
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;

    ${props => {
        return props.isRootItem && css`
            font-weight: bold;
        `
    }}

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

            &:after {
                display: block;
                content: attr(title);
                font-weight: bold;
                height: 0;
                overflow: hidden;
                visibility: hidden;
            }


            &:hover:before {
                border-left: 3px solid #000000;
            }

            &:hover {
                color: #000000;
                text-shadow: 0 0 .65px #333, 0 0 .65px #333;
            }
        `
    }}

    ${props => {
        return props.isPage && css`
            color: #ea4335;

            &:hover {
                color: #ea4335;
            }
        `
    }}

    ${props => {
        return props.isPage && props.isActive && css`
            color: rgba(0, 0, 0, 0.6);

            &:hover {
                color: rgba(0, 0, 0, 0.6);
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
    font-size: 13px;
    flex: 0 0 auto;

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
