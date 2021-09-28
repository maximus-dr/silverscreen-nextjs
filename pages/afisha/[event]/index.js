import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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

    const templatesData = fs.readFileSync(path.join(process.cwd(), 'db/templates/templates.json'), 'utf8');
    const templates = JSON.parse(templatesData);

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
    const {events} = state.data;

    const eventId = route.query.event;
    const event = events.find(item => item.id === eventId);



    return (
        <div style={{backgroundImage: `url('` + event.posterLink + `')`, minHeight: '100vh', color: '#ffffff'}}>
            Event Page
            <h3>{route.query.event}</h3>
        </div>
    )
}
