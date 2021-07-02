import styled from "styled-components";


export const PanelUlCaption = styled.span`
    display: inline-block;
    padding: 5px;
    padding-left: 10px;
    font-weight: bold;
`;

export const PanelUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const PanelLi = styled.li`
    width: 100%;
    padding: 5px 15px;
    padding-left: 25px;
    cursor: grab;

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }

    &:active {
        cursor: grabbing;
    }
`;