import styled, {css} from "styled-components";

export const PropsBorderInputs = styled.div`
    display: block;
    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;


export const BorderWidthInput = styled.input`
    width: 55px;
`;

export const BorderWidthUnit = styled.span`
    display: inline-block;
    padding-left: 5px;

    ${props => props.isDisabled && `
        opacity: 0.5;
    `}
`;

export const BorderStyleSelect = styled.select`

`;

export const BorderColorInput = styled.input`
    width: 110px;
`;

export const BorderProps = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 110px;
`;

export const BorderPropsSpan = styled.span`
    display: inline-block;
    padding: 5px;
    padding-right: 0;
    width: 43px;
    text-align: left;
`;