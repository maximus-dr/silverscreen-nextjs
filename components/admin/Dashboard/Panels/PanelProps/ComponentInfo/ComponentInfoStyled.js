import styled from "styled-components";

export const ComponentSectionWrapper = styled.div`

`;

export const ComponentData = styled.div`
    width: 100%;
    margin-bottom: 10px;
    border: 1px dashed black;
    padding: 5px 0;
`;

export const ComponentPropItem = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 5px;
`;

export const ComponentPropKey = styled.span`
    display: inline-block;
    padding-right: 5px;
    font-weight: bold;
`;

export const ComponentPropValue = styled.div`
    display: inline-block;
    width: 100%;
`;

export const ComponentElements = styled.div`
    border: 1px dashed black;
    padding: 5px;
`;

export const ComponentInfoTextarea = styled.textarea`
    display:inline-block;
    border: solid 1px #000;
    min-height:50px;
    width: 100%;
    resize: none;
`;