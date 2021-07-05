import styled from "styled-components";


export const PanelUlCaption = styled.span`
    position: relative;
    display: inline-block;
    padding: 5px 18px 5px 18px;
    margin-bottom: 2px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        left: 5px;
        top: 9px;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top: 5px solid rgba(0, 0, 0, 0.7);
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const PanelUlSubCaption = styled.span`
    display: inline-block;
    padding: 5px;
    padding-left: 25px;
    font-weight: bold;
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

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }

    &:active {
        cursor: grabbing;
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
`;