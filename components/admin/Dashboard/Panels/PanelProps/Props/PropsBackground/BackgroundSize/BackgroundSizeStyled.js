import styled, {css} from "styled-components";



export const BackgroundSizeOutput = styled.div`
    display: none;
    margin-top: 5px;

    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;
