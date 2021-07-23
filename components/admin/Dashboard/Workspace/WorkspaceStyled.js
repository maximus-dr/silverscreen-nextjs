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
