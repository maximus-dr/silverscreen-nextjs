import styled from "styled-components";



export const BackgroundImageWrapper = styled.div`
    width: 100%;
`;

export const BackgroundImageRow = styled.div`

`;

export const BackgroundImageTextarea = styled.textarea`
    width: 244px;
    resize: none;
    margin-bottom: 10px;
    min-height: 75px;
`;

export const BackgroundImageRadio = styled.input`
    cursor: pointer;
`;

export const BackgroundImageLabel = styled.label`
    cursor: pointer;
    padding: 0 25px 0 5px;
    margin-bottom: 15px;
    display: inline-block;
`;

export const GradientInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const GradientRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

export const GradientSelect = styled.select`
    margin-right: 10px;
    margin-bottom: 10px;
    height: 21px;
    cursor: pointer;
`;

export const GradientInput = styled.input`
    margin-right: 5px;
    width: 110px;
`;

export const GradientLabel = styled.span`
    ${props => props.disabled && `
        opacity: 0.4;
    `}
`;

export const GradientDegInputWrapper = styled.div`
    margin-bottom: 5px;
`;

export const GradientDegInput = styled.input`
    margin-right: 5px;
    width: 110px;
`;

export const GradientStopInput = styled.input`
    margin-left: 22px;
    margin-right: 5px;
    width: 50px;
`;


