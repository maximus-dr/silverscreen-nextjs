import styled, {css} from 'styled-components';

export const TabWarning = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 20px 50px 20px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const TabWarningCaption = styled.span`
    color: red;
    margin-bottom: 25px;
    font-size: 16px;
    text-align: center;
`;
