import styled from "styled-components";


export const ToolsWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;

`;

export const ToolsFixWrapper = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    width: 330px;
    justify-content: space-between;
    height: 40px;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    background-color: #ffffff;
    padding: 0 15px;
`;

export const ToolsItem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    font-size: 12px;
`;

export const ToolsButton = styled.button`
    cursor: pointer;
`;
