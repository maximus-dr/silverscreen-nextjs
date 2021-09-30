import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import EventPageComponent from '../../../components/test/EventPage/EventPageComponent';
import { fetchDataList } from '../../../core/functions/common/common';
import { setDataList } from '../../../store/actions/data';
import { setDocumentComponentsData } from '../../../store/actions/document';
import { initializeStore } from '../../../store/store';
const path = require('path');
const fs = require('fs');



export async function getServerSideProps() {

    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    const dbPath = path.join(process.cwd(), 'db/pages/afisha/event/event.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const componentsData = JSON.parse(data);

    const dataList = fetchDataList(fs, path);

    dispatch(setDataList(dataList));
    dispatch(setDocumentComponentsData(componentsData));

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
        <EventPageComponent event={event} eventShows={eventShows} />
    )
}
