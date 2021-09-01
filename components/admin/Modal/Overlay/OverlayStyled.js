import styled from "styled-components";


export const OverlayWrapper = styled.div`
    display: none;
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.85);

    ${props => props.isOpen && `
        display: block;
    `}
`;
