import styled from "styled-components";


export const DndWrapper = styled.div`
    background-color: #383838;
    color: #fff;
    padding: 10px;

    & ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    & ul li {
        background-color: #383838;
        padding: 10px 20px;
        position: relative;
        display: flex;
        align-items: flex-start;
        line-height: 1;
        width: 100%;
    }

    & li svg {
        height: 2rem;
        color: #fff;
    }

`;


export const Drag = styled.div`
    margin-right: 15px;
    cursor: grab;
    width: 100%;

    &:active {
        cursor: grabbing;
    }
`;