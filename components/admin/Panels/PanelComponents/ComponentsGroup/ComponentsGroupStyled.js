import styled, {css} from "styled-components";


export const ComponentsUlWrapper = styled.div`
    position: relative;
    overflow: visible;
`;

export const ComponentsUlCaption = styled.span`
    position: relative;
    display: inline-block;
    padding: 2px 18px 2px 18px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);

    &:before {
        content: '';
        position: absolute;
        left: 8px;
        top: 5px;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-left: 4px solid rgba(0, 0, 0, 0.7);
        border-right: none;
        transition: transform 200ms;
        
        ${props => {
            return props.expanded && css`
                transform: rotate(90deg);
            `
        }}
    }

    &:hover {
        background-color: #2196f3;
        color: #ffffff;
    }

    &:hover:before {
        border-left: 4px solid #ffffff;
    }
`;

export const ComponentsUlContent = styled.div`
    max-height: 0;
    transition: max-height 0.1s ease-out;
    overflow: hidden;

    ${props => {
        return props.expanded && css`
            max-height: 500px;
            transition: max-height 0.1s ease-in;
        `
    }}
`;

export const ComponentsUlSubCaption = styled.span`
    display: inline-block;
    padding: 5px;
    padding-left: 25px;
    font-weight: bold;
`;

export const ComponentsUlSubtitle = styled.span`
    display: inline-block;
    padding: 5px 15px;
    padding-left: 30px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.4);
`;

export const ComponentsUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 2px;
`;

export const ComponentsLi = styled.li`
    position: relative;
    width: 100%;
    padding: 3px 15px;
    padding-left: 25px;
    cursor: grab;
    transition: background-color 10ms;

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }

    &:active {
        cursor: grabbing;
        background-color: rgba(0, 0, 0, 0.1);
    }

    /* isActive */
    /* ${props => {
        return props.isActive && css`
            background-color: #b0bec5;

            &:hover {
                background-color: #b0bec5;
            }
        `
    }} */
`;