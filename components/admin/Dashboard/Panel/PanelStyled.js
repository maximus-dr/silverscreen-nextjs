import styled from "styled-components";

export const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 50px;
`;

export const PanelHeader = styled.header`
    width: 100%;
    padding: 5px;
    padding-top: 15px;
    font-weight: bold;
`;

export const PanelBody = styled.div`
    width: 100%;
    min-height: 100px;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
    flex-grow: 1;
`;