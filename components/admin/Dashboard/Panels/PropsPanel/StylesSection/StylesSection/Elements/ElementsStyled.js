import styled, {css} from "styled-components";


export const ElementsWrapper = styled.div`
    padding: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const ElementItem = styled.span`
    display: inline-block;
    padding: 5px;
    text-align: center;
    cursor: pointer;

    ${props => {
        return props.isActive && css`
            outline: 1px dashed #1e88e5;
        `
    }}
`;
