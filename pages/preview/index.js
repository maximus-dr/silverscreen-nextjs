import path from 'path';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataList } from '../../core/functions/common/common';
import { renderComponents } from '../../core/functions/render';
import { setDataList } from '../../store/actions/data';
import { setDocumentComponentsData, setMode } from '../../store/actions/document';
import { initializeStore } from '../../store/store';
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
