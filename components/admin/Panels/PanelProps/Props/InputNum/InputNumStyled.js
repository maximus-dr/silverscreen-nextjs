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
`;

export const InputNumUnit = styled.span`
    padding: 0 5px;
`;

export const InputNumUnitSingle = styled.span`
    ${props => props.isDisabled && `
        opacity: 0.4;
    `}
`;

export const InputNumSelect = styled.select`
    cursor: pointer;
    width: 64px;
`;
