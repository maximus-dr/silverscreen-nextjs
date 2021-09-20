import styled, { keyframes } from "styled-components";


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const EventCardComponent = styled.div`
    position: relative;
    color: #ffffff;
    border: 1px dashed #ffffff;
    width: 272px;
    height: 400px;
    margin-bottom: 25px;
    margin-right: 25px;
    animation: ${fadeIn} 100ms linear;
`;

export const EventOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding-top: 10px;
`;

export const TagsGroup = styled.div`
    padding: 5px 15px;
    margin-bottom: 5px;
`;

export const EventShedule = styled.div`

`;

export const EventCity = styled.div``;

export const EventPoster = styled.div`
    width: 272px;
    height: 400px;
    background-size: cover;
    overflow: hidden;
    background-position: center;


    ${props => {
        const {link} = props;

        return `
            background-image: url(${link});
        `;
    }}
`;

export const EventAgeLimit = styled.div``;

export const EventAcronym = styled.h3`

`;

export const EventLanguage = styled.div``;

export const EventGenre = styled.div``;
