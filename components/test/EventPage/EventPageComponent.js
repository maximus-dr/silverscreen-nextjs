import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { AudioTypeValue, Auditorium, ColumnLeftBottom, ColumnTopRight, EventPoster, EventTitle, Page, PageBackground, PageWrapper, ShowCard, ShowCardDate, ShowCardTop, ShowCinema, ShowCity, ShowsContainer, ShowTime, VideoTypeValue } from './EventPageStyled';


export default function EventPageComponent(props) {

    const {event, eventShows} = props;


    return (
        <Page>
            <PageBackground link={event.posterLink} />
            <PageWrapper>
                <EventTitle>{event.acronym}</EventTitle>
                <EventPoster link={event.posterLink} />
                <ShowsContainer>
                    {eventShows.map(show => {
                        const showStart = new Date(show.start);
                        const showStartTime = showStart.toLocaleTimeString('en-US', {
                            hour12: false,
                            hour: 'numeric',
                            minute: 'numeric'
                        });
                        const showDate = showStart.toLocaleDateString('en-US');
                        return (
                            <ShowCard key={show.id}>
                                <ShowCardTop>
                                    <ShowTime>
                                        {showStartTime}
                                    </ShowTime>
                                    <ColumnTopRight>
                                        <ShowCinema>
                                            {show.cinema.acronym}
                                        </ShowCinema>
                                        <ShowCity>
                                            {show.city.acronym}
                                        </ShowCity>
                                    </ColumnTopRight>
                                </ShowCardTop>

                                <ShowCardDate>
                                    {showDate}
                                </ShowCardDate>

                                <ColumnLeftBottom>
                                    <VideoTypeValue>{show.typeVideo.acronym}</VideoTypeValue>
                                    <AudioTypeValue>{show.typeAudio.acronym}</AudioTypeValue>
                                </ColumnLeftBottom>

                                <Auditorium>
                                    {show.auditorium.acronym}
                                </Auditorium>
                            </ShowCard>
                        )
                    })}
                </ShowsContainer>
            </PageWrapper>
        </Page>
    )
}
