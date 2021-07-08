import styled, {css} from "styled-components";


export const StatesSectionBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin-bottom: 10px;
`

export const StatesItem = styled.div`
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
        color: #1e88e5;
    }

    ${props => {
        return props.id === props.activeItem && css`
            color: #1e88e5;
            outline: 1px dashed #1e88e5;
            
            &:hover {
                text-shadow: none;
            }
        `
    }}
`;
