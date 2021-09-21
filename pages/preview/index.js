import path from 'path';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderComponents } from '../../core/functions/render';
import { setDocumentComponentsData, setMode } from '../../store/actions/document';
import { initializeStore } from '../../store/store';
const fs = require('fs');


export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;

    const eventsData = fs.readFileSync(path.join(process.cwd(), `db/events/events.json`), `utf-8`);
    const events = JSON.parse(eventsData);

    dispatch(setAllEvents(events));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}


export default function PreviewPage() {

    const state = useSelector(state => state);
    const {componentsData, mode} = state.document;
    const dispatch = useDispatch();

    const components = renderComponents(componentsData, state);

    useEffect(() => {
        if (mode !== 'preview') {
            dispatch(setMode('preview'));
        }
        const data = JSON.parse(localStorage.getItem('page_data'));
        if (!componentsData) {
            dispatch(setDocumentComponentsData(data));
        }
    });

    return (
        <div>
            {components}
        </div>
    )
}
