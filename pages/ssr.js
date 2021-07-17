import axios from 'axios';
import { useEffect } from 'react';
import FilmGallery from '../components/test/FilmGallery/FilmGallery';
import TestPage from '../components/test/TestPage/TestPage';
import { renderComponents } from '../core/functions/render';
import { API_ALL_EVENTS } from '../core/rest/paths';
import { initializeStore } from '../store/store';
const path = require('path');
const fs = require('fs');
import Head from 'next/head';


export async function getServerSideProps() {
    const dbPath = path.join(process.cwd(), 'db/db.json');
    const componentsData = fs.readFileSync(dbPath, 'utf8');
    
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
      .then(res => res.data)
      .catch(err => console.log(err));

    dispatch({
        type: 'SET_EVENTS',
        events
    })

    return { 
        props: { 
            initialReduxState: reduxStore.getState(),
            components: JSON.parse(componentsData)
        } 
    }
}


export default function SSR(props) {

    // const Components = renderComponents(props.components);
    
    // useEffect(() => {
    //     const numOfElements = document.getElementsByTagName('*').length;
    // }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="keywords" content="next,js,react" />
                <meta name="description" content="nextjs tutorial" />
                <title>SSR Test Page</title>
            </Head>

            <TestPage />
        </>
    )
}