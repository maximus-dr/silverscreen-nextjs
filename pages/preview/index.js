import path from 'path';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataList, updateComponentData } from '../../core/functions/common/common';

import { setDataList } from '../../store/actions/data';
import { setDocumentComponentsData, setMode } from '../../store/actions/document';
import { initializeStore } from '../../store/store';
import { renderComponents } from '../../core/functions/render';
import { useRouter } from 'next/router';
const fs = require('fs');






export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;
    const dataList = fetchDataList(fs, path);

    dispatch(setDataList(dataList));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}


export default function PreviewPage() {

    const state = useSelector(state => state);
    const {componentsData, mode} = state.document;
    const {data} = state;
    const dispatch = useDispatch();
    const components = renderComponents(componentsData, state);
    const router = useRouter();
    const query = router.query;

    const eventId = query.eventId || null;

    useEffect(() => {
        if (mode !== 'preview') {
            dispatch(setMode('preview'));
        }

        if (!componentsData) {
            const pageData = JSON.parse(localStorage.getItem('page_data'));
            updateComponentData(pageData, data, eventId);
            dispatch(setDocumentComponentsData(pageData));
        }
    });

    return (
        <div>
            {components}
        </div>
    )
}
