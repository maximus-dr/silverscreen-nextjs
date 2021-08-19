import styled from "styled-components";


export const OverlayWrapper = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);

    ${props => props.isOpen && `
        display: block;
    `}
`;
