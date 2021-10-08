import path from 'path';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComponentIds } from '../../../core/functions/admin/components';
import { fetchDataList } from '../../../core/functions/common/common';
import { renderComponents } from '../../../core/functions/render';
import { setDataList } from '../../../store/actions/data';
import { setDocumentComponentsData, setMode } from '../../../store/actions/document';
import { initializeStore } from '../../../store/store';
const fs = require('fs');


export const updatePageData = (component, events, pageEvent) => {

    if (component.role === 'container') {
        if (component.childrenList.length === 0) return;
        const card = component.childrenList.find(child => child.role === 'card');

        const createNewCard = (card, event) => {

            const updateCardData = (cardElement) => {
                if (cardElement.role === 'card') {
                    cardElement.eventId = event.id;
                }
                if (cardElement.role === 'posterLink') {
                    cardElement.link = `/afisha/${event.id}`
                    cardElement.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
                }
                if (cardElement.role === 'cardTitle') {
                    cardElement.value = event.acronym;
                }
                if (cardElement.role === 'genreList') {
                    const genreItem = cardElement.childrenList.find(item => item.role === 'genreItem');

                    const genreItems = event.genre.map(genre => {
                        const copy = JSON.parse(JSON.stringify(genreItem));
                        copy.value = genre.acronym;
                        return copy;
                    });
                    cardElement.childrenList = genreItems;
                }
                if (cardElement.childrenList && cardElement.childrenList.length > 0) {
                    cardElement.childrenList.forEach(child => {
                        updateCardData(child);
                    });
                }
                return cardElement;
            }
            const template = JSON.parse(JSON.stringify(card));
            const newCard = updateCardData(template);

            return newCard;
        }
        const cards =  events.map(event => {
            const newCard = createNewCard(card, event);

            return updateComponentIds(newCard);
        });


        component.childrenList = cards;
    }

    if (component.role === 'showsContainer') {

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
            const data = JSON.parse(localStorage.getItem('page_data'));
            updatePageData(data, events);
            dispatch(setDocumentComponentsData(data));
        }
    });

    return (
        <div>
            {components}
        </div>
    )
}
