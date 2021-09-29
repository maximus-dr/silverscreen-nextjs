import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDataList } from '../../../store/actions/data';
import { initializeStore } from '../../../store/store';
import { AudioType, AudioTypeKey, AudioTypeValue, Auditorium, ColumnLeftBottom, ColumnTopRight, EventPoster, EventTitle, Page, PageBackground, PageWrapper, ShowCard, ShowCardBottom, ShowCardDate, ShowCardTechnology, ShowCardTop, ShowCinema, ShowCity, ShowsContainer, ShowTime, VideoType, VideoTypeKey, VideoTypeValue } from './indexStyled';
const path = require('path');
const fs = require('fs');


export async function getServerSideProps() {

    const dbPath = path.join(process.cwd(), 'db/test.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const componentsData = JSON.parse(data);

    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    const eventsData = fs.readFileSync(path.join(process.cwd(), `db/events/events.json`), 'utf8');
    const events = JSON.parse(eventsData);

    const showsData = fs.readFileSync(path.join(process.cwd(), `db/shows/shows.json`), 'utf8');
    const shows = JSON.parse(showsData);

    const dataList = {
        events,
        shows
    }

    dispatch(setDataList(dataList));
    // dispatch(setDocumentComponentsData(componentsData));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}



export default function EventPage() {
    const route = useRouter();
    const state = useSelector(state => state);
    const {events, shows} = state.data;

    const eventId = route.query.event;
    const event = events.find(item => item.id === eventId);
    const eventShows = shows.filter(show => show.eventId === eventId);


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
