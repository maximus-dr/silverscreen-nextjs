import styled from "styled-components";


export const ScreensWrapper = styled.div`
    width: 210px;
    display: flex;
    justify-content: space-between;
`;

export const ScreenButton = styled.button`
    cursor: pointer;

    ${props => props.isActive && `
        background-color: #000000;
        color: #ffffff;
        outline: none;
        border: none;
    `}
`;
