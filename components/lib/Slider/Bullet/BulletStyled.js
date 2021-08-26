import styled from "styled-components";


export const BulletStyled = styled.button`
    ${props => props.isSelected && `
        background: black;
        color: #fff;
    `}
`;
