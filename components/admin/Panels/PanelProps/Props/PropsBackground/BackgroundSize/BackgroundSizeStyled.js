import styled, {css} from "styled-components";



export const BackgroundSizeWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 2px;
`;

export const BackgroundSizeSelect = styled.select`
    width: 124px;
    cursor: pointer;
`;

export const BackgroundSizeOutput = styled.div`
    display: none;
    margin-top: 5px;

    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;

export const OutputGroup = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const BackgroundSizeInput = styled.input`
    width: 55px;
    margin-right: 5px;
`;

export const BackgroundSizeUnit = styled.select`
    width: 64px;
    cursor: pointer;
`;
