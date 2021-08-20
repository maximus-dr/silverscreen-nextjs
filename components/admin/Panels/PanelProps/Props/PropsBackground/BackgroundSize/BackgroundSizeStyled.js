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
    margin-top: 5px;
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

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemKey = styled.span`
    display: inline-block;
    width: 120px;
    margin-bottom: 12px;
`;

export const ItemLabel = styled.span`
    display: inline-block;
    align-self: flex-end;
    padding-right: 15px;
    height: 21px;
    margin-bottom: 5px;
`;
