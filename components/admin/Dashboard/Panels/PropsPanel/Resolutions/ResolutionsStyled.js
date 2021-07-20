import styled, {css} from "styled-components";


export const ResolutionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px dashed black;
    margin-bottom: 5px;
    padding: 10px 0;
`;


export const ResolutionRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ResolutionsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ResolutionsBody = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
`;

export const ResolutionsCaption = styled.label`
    display: inline-block;
    padding: 10px;
    padding-left: 10px;
    cursor: pointer;
    font-size: 15px;
`;

export const ResolutionsCheckbox = styled.input`
    margin-top: 11px;
    align-self: flex-start;
    cursor: pointer;
`;

export const ResolutionsItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    width: 40px;
    color: rgba(0, 0, 0, 0.6);
    opacity: 0.4;
    cursor: default;
    pointer-events: none;

    &:hover {
        color: #000000;
    }

    ${props => {
        return props.isActive && css`
            position: relative;
            color: #1e88e5;

            &:after {
                content: '';
                position: absolute;
                bottom: -3px;
                width: 40px;
                height: 2px;
                background-color: #1e88e5;
            }

            &:hover {
                color: #1e88e5;
                cursor: default;
            }
        `
    }}

    ${props => {
        return props.showItem && css`
            opacity: 1;
            cursor: pointer;
            pointer-events: auto;
        `
    }}
`;

export const ResolutionsIcon = styled.div`
    position: relative;
    margin-bottom: 2px;
    height: 25px;
    pointer-events: none;

    & > svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        pointer-events: none;
    }
`;

export const ResolutionsValue = styled.div`
    font-size: 12px;
    text-align: center;
    pointer-events: none;
`;
