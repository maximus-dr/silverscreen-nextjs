import styled from "styled-components";


export const NotificationWrapper = styled.div`
    position: absolute;
    bottom: 55px;
    right: 200px;
`;

export const NotificationFixWrapper = styled.div`
    position: fixed;
    bottom: 55px;
    display: inline-flex;
    flex-direction: column;
    padding: 10px 15px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    border-radius: 5px;
`;

export const NotificationCaption = styled.p`
    margin: 0;
    margin-bottom: 5px;
    text-align: center;
`;

export const NotificationMessage = styled.p`
    margin: 0;
`;
