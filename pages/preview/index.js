import path from 'path';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComponentIds } from '../../core/functions/admin/components';
import { createNewCard, fetchDataList } from '../../core/functions/common/common';

import { setDataList } from '../../store/actions/data';
import { setDocumentComponentsData, setMode } from '../../store/actions/document';
import { initializeStore } from '../../store/store';
import { renderComponents } from '../../core/functions/render';
const fs = require('fs');


export const updatePageData = (component, events, pageEvent) => {

    if (component.role === 'container') {
        if (component.childrenList.length === 0) return;
        const card = component.childrenList.find(child => child.role === 'card');
        const cards =  events.map(event => {
            const newCard = createNewCard(JSON.parse(JSON.stringify(card)), event);
            return updateComponentIds(newCard);
        });


        component.childrenList = cards;
    }

    if (component.role === 'eventTitle') {
        component.value = pageEvent.acronym;
    }

    if (component.role === 'poster') {
        component.styles.common.backgroundImage = `url('` + pageEvent.posterLink + `')`;
    }

    if (component.role === 'eventBackground') {
        component.styles.common.backgroundImage = `url('` + pageEvent.posterLink + `')`;
    }

    if (component.childrenList && component.childrenList.length > 0) {
        component.childrenList.forEach(child => updatePageData(child, events, pageEvent));
    }
}



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
    const {events} = state.data;
    const dispatch = useDispatch();
    const components = renderComponents(componentsData, state);


    useEffect(() => {
        if (mode !== 'preview') {
            dispatch(setMode('preview'));
        }

        if (!componentsData) {
            const pageData = JSON.parse(localStorage.getItem('page_data'));
            updatePageData(pageData, events);
            dispatch(setDocumentComponentsData(pageData));
        }
    });

    return (
        <div>
            {components}
        </div>
    )
}
