import styled from "styled-components";


export const EventCardComponent = styled.div`
    color: #ffffff;
    border: 1px dashed #ffffff;
    width: 272px;
    margin-bottom: 25px;
`;

export const EventShedule = styled.div`

`;

export const EventPoster = styled.div`
    width: 272px;
    height: 400px;
    background-size: cover;
    overflow: hidden;
    background-position: center;


    ${props => {
        const {event} = props;
        const link = `${event.posterLink}`;

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
