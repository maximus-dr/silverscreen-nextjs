import styled, {css} from "styled-components";


export const ScreensSectionBody = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 10px;
`;

export const ScreensItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    width: 46px;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
        color: #000000;
    }

    ${props => {
        return props.id === props.activeItem && css`
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
`;

export const ScreensIcon = styled.div`
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

export const ScreenValue = styled.div`
    font-size: 12px;
    text-align: center;
    pointer-events: none;
`;
