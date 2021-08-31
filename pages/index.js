import axios from 'axios';
import { useSelector } from 'react-redux';
import Overlay from '../components/admin/Modal/Overlay/Overlay';
import { renderComponents } from '../core/functions/render';
import { API_ALL_EVENTS } from '../core/rest/paths';
import { setDocumentComponentsData, setResolution, setTemplates } from '../store/actions/document';
import { initializeStore } from '../store/store';
const path = require('path');
const fs = require('fs');


// export async function getStaticProps() {
//   const dbPath = path.join(process.cwd(), 'db/demo/db.json');
//   const componentsData = fs.readFileSync(dbPath, 'utf8');

//   const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
//     .then(res => res.data)
//     .catch(err => console.log(err));

//   return {
//     props: {
//       componentsData: JSON.parse(componentsData),
//       events
//     },
//     revalidate: 1
//   }
// }


export async function getServerSideProps() {

    const dbPath = path.join(process.cwd(), 'db/test.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const componentsData = JSON.parse(data);
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    const templatesData = fs.readFileSync(path.join(process.cwd(), 'db/templates/templates.json'), 'utf8');
    const templates = JSON.parse(templatesData);

    dispatch(setDocumentComponentsData(componentsData));
    dispatch(setTemplates(templates));
    dispatch(setResolution('320'));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}



export default function Home() {

    const componentsData = useSelector(state => state.document.componentsData);
    // const components = renderComponents(componentsData);

  return (
    <>
        {/* {components} */}
    </>
  )
}
