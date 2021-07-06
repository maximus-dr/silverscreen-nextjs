import styled, {css} from "styled-components";


export const PanelUlWrapper = styled.div`
    position: relative;
    overflow: visible;
`;

export const PanelUlCaption = styled.span`
    position: relative;
    display: inline-block;
    padding: 5px 18px 5px 25px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        left: 8px;
        top: 8px;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-left: 4px solid rgba(0, 0, 0, 0.7);
        border-right: none;
        transition: transform 200ms;
        
        ${props => {
            return props.expanded && css`
                transform: rotate(90deg);
            `
        }}
    }

    &:hover {
        background-color: #2196f3;
        color: #ffffff;
    }

    &:hover:before {
        border-left: 4px solid #ffffff;
    }
`;

export const PanelUlContent = styled.div`
    max-height: 0;
    transition: max-height 0.1s ease-out;
    overflow: hidden;

    ${props => {
        return props.expanded && css`
            max-height: 500px;
            transition: max-height 0.1s ease-in;
        `
    }}
`;

export const PanelUlSubCaption = styled.span`
    display: inline-block;
    padding: 5px;
    padding-left: 25px;
    font-weight: bold;
`;

export const PanelUlSubtitle = styled.span`
    display: inline-block;
    padding: 5px 15px;
    padding-left: 30px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.4);
`;

export const PanelUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 2px;
`;

export const PanelLi = styled.li`
    position: relative;
    width: 100%;
    padding: 5px 15px;
    padding-left: 52px;
    cursor: grab;
    transition: background-color 10ms;

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }

    &:active {
        cursor: grabbing;
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:before {
        content: 'svg';
        position: absolute;
        top: 0;
        left: 25px;
        width: 23px;
        height: 23px;
        padding-top: 2px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }

    /* isActive */
    /* ${props => {
        return props.isActive && css`
            background-color: #b0bec5;

            &:hover {
                background-color: #b0bec5;
            }
        `
    }} */
`;