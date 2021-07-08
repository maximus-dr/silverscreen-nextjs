import styled, {css} from "styled-components";


export const StylesNumInputWrapper = styled.div`

`;

export const StylesNumInputField = styled.input`
    width: 55px;

    ${props => {
        return props.fullWidth && css`
            width: 110px;
        `
    }}

    ${props => {
        return props.middleWidth && css`
            width: 88px;
        `
    }}
`;

export const StylesNumInputUnit = styled.span`
    padding: 0 5px;
`;
