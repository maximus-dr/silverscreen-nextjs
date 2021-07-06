import styled from "styled-components";

export const PanelWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 50px;
    margin-bottom: 15px;
    background-color: #ffffff;
`;

export const PanelHeader = styled.header`
    width: 100%;
    
`;

export const PanelTitle = styled.span`
    display: inline-block;
    padding: 5px;
    color: #ffffff;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`;

export const PanelBodyWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100px;
    height: 90%;
    flex-grow: 1;
`;

export const PanelBody = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    overflow-y: auto;
`;