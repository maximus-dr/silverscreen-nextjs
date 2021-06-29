import axios from 'axios';
import { renderComponents } from '../core/functions/render';
import { API_ALL_EVENTS } from '../core/rest/paths';
import { initializeStore } from '../store/store';
const path = require('path');
const fs = require('fs');


export async function getServerSideProps() {
    const dbPath = path.join(process.cwd(), 'db/db.json');
    const components = fs.readFileSync(dbPath, 'utf8');
    
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
            components: JSON.parse(components)
        } 
    }
}


export default function SSR(props) {

    const Components = renderComponents(props.components);

    return (
        <>
            <h2>SSR</h2>
            <div>{Components}</div>
        </>
    )
}