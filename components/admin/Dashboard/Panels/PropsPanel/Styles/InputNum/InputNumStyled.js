import styled, {css} from "styled-components";


export const InputNumWrapper = styled.div`

`;

export const InputNumField = styled.input`
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

export const InputNumUnit = styled.span`
    padding: 0 5px;
`;
