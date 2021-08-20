import styled, {css} from "styled-components";



export const BackgroundPositionOutput = styled.div`
    margin-bottom: 5px;
    display: none;

    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;

export const PositionInput = styled.input`
    width: 55px;
    margin-right: 5px;
`;

export const PositionUnit = styled.select`
    width: 64px;
    height: 21px;
`;
