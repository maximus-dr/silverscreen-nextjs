import styled, {css} from 'styled-components';


const TreeWrapper = styled.div`
    position: relative;
    padding-left: 10px;
    padding-right: 1px;
`;

const TreeItem = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    transition: font-weight 10ms;
    flex: 0 0 auto;
    width: 100%;
    outline: none;
    background-color: transparent;

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

    ${props => props.allowDrop && `
        outline: 2px solid #42a5f5;
    `}
`;

const TreeItemType = styled.span`
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
            color: rgba(0, 0, 0, 0.55);
        `
    }}

    ${props => {
        return props.isPage && css`
            font-weight: bold;
            color: rgba(0, 0, 0, 0.55);
        `
    }}

    ${props => {
        return props.hasChildren && css`
            cursor: pointer;

            &:before {
                content: '';
                position: absolute;
                top: 6px;
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
                text-shadow: 0 0 .65px rgba(0, 0, 0, 0.4), 0 0 .65px rgba(0, 0, 0, 0.4);
            }
        `
    }}

    ${props => {
        return props.isPage && css`
            font-weight: bold;

            &:hover {
                font-weight: bold;
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

const TreeItemName = styled.span`
    color: #42a5f5;
    font-size: 13px;
    flex: 0 0 auto;



    ${props => {
        return props.isPage && css`
            font-weight: bold;
            color: #42a5f5;
        `
    }}

    ${props => {
        return props.isRootItem && css`
            font-weight: bold;
            color: #42a5f5;
        `
    }}

    ${props => {
        return props.isActive && css`
            color: #ffffff;
        `
    }}
`;

const TreeChildren = styled.div`
    display: block;
    ${props => {
        return !props.expanded && css`
            display: none;
        `
    }}
`;

export {
    TreeWrapper,
    TreeItem,
    TreeItemType,
    TreeItemName,
    TreeChildren
}
