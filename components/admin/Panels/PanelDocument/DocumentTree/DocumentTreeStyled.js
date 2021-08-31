import styled, {css} from 'styled-components';

export const ListItem = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    transition: font-weight 10ms;
    flex: 0 0 auto;
    width: 100%;
    outline: none;
    background-color: transparent;

    &:hover {
        outline: 1px dashed #1976d2;
        background-color: rgba(0, 0, 0, 0.04);
    }

    ${props => {
        return props.isActive && css`
            background-color: #42a5f5;
            color: #000000;

            &:hover {
                background-color: #42a5f5;
                color: #000000;
            }
        `;
    }}

    ${props => props.allowDrop && `
        outline: 2px solid #42a5f5;
    `}
`;
