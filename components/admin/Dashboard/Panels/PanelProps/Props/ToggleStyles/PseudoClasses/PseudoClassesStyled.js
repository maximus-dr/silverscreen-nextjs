import styled, {css} from "styled-components";


export const PseudoClassesBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.4;
    cursor: default;
    pointer-events: none;

    ${props => {
        return props.isActive && css`
            opacity: 1;
            cursor: pointer;
            pointer-events: auto;
        `
    }}
`

export const PseudoClassesItem = styled.div`
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;

    &:hover {
        color: #000000;
    }

    ${props => {
        return props.isActive && css`
            color: #1e88e5;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                bottom: -3px;
                left: 50%;
                transform: translateX(-50%);
                width: 40px;
                height: 2px;
                background-color: #1e88e5;
            }
            
            &:hover {
                color: #1e88e5;
            }
        `
    }}
`;
