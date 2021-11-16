import React from 'react'
import { useSelector } from 'react-redux';
import { fetchDataList, updatePageData } from '../../../core/functions/common/common';
import { renderComponents } from '../../../core/functions/render';
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
    updatePageData(componentsData, dataList);

    dispatch(setDataList(dataList));
    dispatch(setDocumentComponentsData(componentsData));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}



export default function EventPage() {

    const state = useSelector(state => state);
    const {componentsData} = state.document;
    const components = renderComponents(componentsData, state);

    return (
        <>
            {components}
        </>
    )
}
