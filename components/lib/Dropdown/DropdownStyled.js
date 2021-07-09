import styled, {css} from 'styled-components';


export const HeadTag = styled.div`
    padding: 0 5px;
    width: 100%;
    text-align: center;

    ${props => {
        return props.default && css`
            color: rgba(191,191,191, 0.87);
        `;
    }}

    ${props => {
        return props.multiple && css`
            width: auto;
            margin-right: 5px;
            margin-bottom: 2px;
            margin-top: 2px;
            padding: 5px 10px;
            background-color: #e8e8e8;
            border: 1px solid rgba(34,36,38,.15);
            border-radius: 5px;
            color: rgba(0,0,0,.6);
            line-height: 1;
            cursor: pointer;
        `
    }}
`;

export const DropdownWarning = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    padding: 25px 20px 50px 20px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const DropdownWarningCaption = styled.span`
    color: red;
    margin-bottom: 25px;
    font-size: 16px;
    text-align: center;
`;
