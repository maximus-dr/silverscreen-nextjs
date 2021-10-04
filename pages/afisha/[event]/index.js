import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import EventPageComponent from '../../../components/test/EventPage/EventPageComponent';
import { fetchDataList } from '../../../core/functions/common/common';
import { renderComponents } from '../../../core/functions/render';
import { setDataList } from '../../../store/actions/data';
import { setDocumentComponentsData } from '../../../store/actions/document';
import { initializeStore } from '../../../store/store';
import { updatePageData } from './../../preview/index';
const path = require('path');
const fs = require('fs');




export async function getServerSideProps({req, resolvedUrl}) {

    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    const dbPath = path.join(process.cwd(), 'db/pages/afisha/event/event.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const componentsData = JSON.parse(data);

    const dataList = fetchDataList(fs, path);
    
    const params = resolvedUrl.split('/');
    const eventId = params[params.length - 1];
    const event = dataList.events.find(event => event.id === eventId);

    updatePageData(componentsData, dataList.events, event);
    

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
    const {componentsData} = state.document;
    const {events, shows} = state.data;

    const eventId = route.query.event;
    const event = events.find(item => item.id === eventId);
    const eventShows = shows.filter(show => show.eventId === eventId);

    const components = renderComponents(componentsData, state);

    return (
        <>
            {components}
        </>
    )
}
