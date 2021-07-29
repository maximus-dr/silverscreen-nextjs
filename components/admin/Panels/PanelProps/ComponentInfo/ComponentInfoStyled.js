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

export const ComponentName = styled.input`
    width: 100%;
`;

export const DeleteButton = styled.button`
    margin: 5px;
    margin-top: 15px;
    margin-bottom: 0;
    padding: 5px 15px;
    border-radius: 4px;
    border:none;
    transition: background-color 100ms, box-shadow 200ms, transform 100ms;
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    background-color: #e0e0e0;
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 0.87);
        background-color: #d5d5d5;
    }

    &:active {
        color: rgba(0, 0, 0, 0.87);
        background-color: #d5d5d5;
        transform: scale(0.9);
    }
`;
