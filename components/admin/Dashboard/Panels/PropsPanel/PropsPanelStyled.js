import styled, {css} from "styled-components";

export const PropsPanelWrapper = styled.div`
    width: 100%;
`

export const ComponentData = styled.div`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px dashed black;
`;

export const ScreensSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 10px;
`;

export const ScreensItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 40px;
    &:hover {
        color: #1e88e5;
    }
`;

export const ScreensIcon = styled.div`
    position: relative;
    margin-bottom: 2px;
    height: 25px;

    & > svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
    }
`;

export const ScreenValue = styled.div`
    font-size: 12px;
    text-align: center;
`;

export const StatesSection = styled.div`
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
        text-shadow: 0 0 .65px #1e88e5, 0 0 .65px #1e88e5;
        outline: 1px dashed #1e88e5;
    }

    &:active {
        color: #1e88e5;
    }
`;

export const PropsSection = styled.div`
    margin-bottom: 5px;
`

export const PropsSectionHeader = styled.div`
    padding: 5px;
    font-weight: bold;
`;

export const PropsSectionBody = styled.div`
    padding: 0 5px;
`

export const PropItem = styled.div`
    display: flex;
`

export const PropKey = styled.div`
    width: 140px;
    padding-right: 5px;
`

export const PropValue = styled.div`

`



