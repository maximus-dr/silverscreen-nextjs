import React from 'react'
import EventPageComponent from '../../../components/test/EventPage/EventPageComponent';
import { setDataList } from '../../../store/actions/data';
import { initializeStore } from '../../../store/store';
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

    return (
        <EventPageComponent />
    )
}
