import styled, {css} from "styled-components";


export const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    display: block;
    margin-top: 55px;
    width: 100%;
    min-width: 400px;
    height: calc(100vh - 55px);
    overflow: auto;
    transition: width 150ms;

    &::-webkit-scrollbar {
    width: 10px;
    height: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(0,0,0,0.1);
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: rgba(0,0,0,0.2);
    }
    &::-webkit-scrollbar-thumb:hover{
        background: rgba(0,0,0,0.4);
    }
    &::-webkit-scrollbar-thumb:active{
        background: rgba(0,0,0,.5);
    }
`;

export const WorkspacePageWrapper = styled.div`
    margin: 0 auto;
    padding: 50px 50px 100px 50px;
    transition: width 150ms;
`;

export const WorkspacePage = styled.div`
    margin: 0 auto;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    transition: width 150ms;
    position: relative;

    ${props => props.pageWidth && css`
        width: ${props.pageWidth};
    `}
`;
