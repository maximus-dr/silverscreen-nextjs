import axios from 'axios';
import { useEffect } from 'react';
import FilmGallery from '../components/FilmGallery/FilmGallery';
import { renderComponents } from '../core/functions/render';
import { API_ALL_EVENTS } from '../core/rest/paths';
import { initializeStore } from '../store/store';
const path = require('path');
const fs = require('fs');


export async function getStaticProps() {
    const dbPath = path.join(process.cwd(), 'db/db.json');
    const components = fs.readFileSync(dbPath, 'utf8');
  
    const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
      .then(res => res.data)
      .catch(err => console.log(err));
    
    return {
      props: {
        initialReduxState: {
            events
        },
        components: JSON.parse(components)
      },
      revalidate: 1
    }
  }


export default function SSR(props) {

    const Components = renderComponents(props.components);
    
    useEffect(() => {
        const numOfElements = document.getElementsByTagName('*').length;
        console.log(numOfElements)
    }, []);

    return (
        <>
            <h2>SSR</h2>
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <FilmGallery />
            <div>{Components}</div>
        </>
    )
}