import styled from "styled-components";


export const SaveTemplateWrapper = styled.div`
    z-index: 100;
    position: absolute;
    display: none;

    ${props => props.isOpen && `
        display: block;
    `}
`;

export const SaveTemplateFixWrapper = styled.div`
    position: fixed;
    top: 155px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffffff;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    border-radius: 5px;
    padding: 25px;
    width: 220px;
`;

export const SaveTemplateTitle = styled.h3`
    margin: 0;
    margin-bottom: 35px;
    text-align: center;
`;

export const SaveTemplateLabel = styled.label`
    display: inline-block;
    margin-bottom: 5px;
`;

export const SaveTemplateInput = styled.input`
    width: 100%;
    margin-bottom: 5px;
    height: 22px;
`;

export const SaveTemplateButtons = styled.div`
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const SaveTemplateButton = styled.button`
    width: 82px;
    padding: 5px;
    cursor: pointer;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
    border: none;
    border-radius: 4px;
    transition: opacity 200ms, transform 200ms;

    &:active {
        opacity: 0.2;
        transform: scale(0.8);
    }

    ${props => props.isCancel && `
        color: #000000;
        background-color: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.8);
    `}
`;

