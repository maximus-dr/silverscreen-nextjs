import path from 'path';
import React from 'react'
import { useSelector } from 'react-redux';
import { fetchDataList, updateComponentData } from '../../core/functions/common/common';
import { setDataList } from '../../store/actions/data';
import { setDocumentComponentsData } from '../../store/actions/document';
import { initializeStore } from '../../store/store';
import { renderComponents } from '../../core/functions/render';
const fs = require('fs');



export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;
    const dataList = fetchDataList(fs, path);

    const dbPath = path.join(process.cwd(), 'db/pages/afisha/afisha.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const componentsData = JSON.parse(data);

    updateComponentData(componentsData, dataList);

    dispatch(setDataList(dataList));
    dispatch(setDocumentComponentsData(componentsData));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}


export default function AfishaPage() {

    const state = useSelector(state => state);
    const {componentsData} = state.document;
    const components = renderComponents(componentsData, state);

    return (
        <>
            {components}
        </>
    )
}
