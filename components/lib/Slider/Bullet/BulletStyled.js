import styled from "styled-components";


export const BulletStyled = styled.button`
    box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
    background: #fff;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
    font-size: 0;
    line-height: 0;
    padding: 0;
    outline: none;
    opacity: 0.3;

    ${props => props.isSelected && `
        width: 10px;
        height: 10px;
    `}
`;
