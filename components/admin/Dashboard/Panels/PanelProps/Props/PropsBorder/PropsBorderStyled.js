import styled, {css} from "styled-components";

export const PropsBorderInputs = styled.div`
    display: block;
    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;
