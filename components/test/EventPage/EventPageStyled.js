import styled from "styled-components";


export const Page = styled.div`
    z-index: -1;
    position: relative;
    min-height: 100vh;
    width: 100%;
    color: #ffffff;
    background: rgb(39, 39, 42);
`;

export const PageBackground = styled.div`
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    filter: blur(10px);
    opacity: 0.2;

    ${props => {
        const {link} = props;
        const url = link ? `url('` + link + `')` : '';
        return `
            background-image: ${url};
        `
    }}
`;

export const PageWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 50px 25px;
`;

export const EventTitle = styled.h2`
    margin: 0;
    font-size: 52px;
    line-height: 52px;
    margin-bottom: 50px;
`;

export const EventPoster = styled.div`
    margin-bottom: 50px;
    width: 272px;
    height: 400px;
    border-radius: 8px;
    background-size: cover;
    ${props => props.link && `
        background-image: url('${props.link}');
    `}
`;

export const ShowsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ShowCard = styled.div`
    margin-right: 25px;
    margin-bottom: 25px;
    flex-basis: 350px;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    color: #ffffff;
`;

export const ShowTime = styled.span`
    font-size: 36px;
    line-height: 36px;
`;

export const ShowCinema = styled.span`
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
`;

export const ShowCity = styled.span`
    text-align: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
`;

export const ColumnTopRight = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2px;
`;

export const ShowCardTop = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const ShowCardDate = styled.span`
    display: inline-block;
    padding: 3px 11px;
`;

export const ShowCardBottom = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
`;

export const ShowCardTechnology = styled.span`
    margin-right: 10px;
    font-size: 14px;
`;

export const VideoType = styled.div`
    display: inline-flex;
`;

export const VideoTypeKey = styled.span`
    display: inline-block;
    width: 50px;
`;

export const VideoTypeValue = styled.span`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
`;

export const AudioType = styled.div`
    display: inline-flex;
`;

export const AudioTypeKey = styled.span`
    display: inline-block;
    width: 50px;
`;

export const AudioTypeValue = styled.span`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
`;

export const ColumnLeftBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Auditorium = styled.span`
    display: inline-block;
    font-size: 18px;
    color: #F1C40F;
    text-transform: uppercase;
`;
