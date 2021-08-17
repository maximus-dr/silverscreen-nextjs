import axios from 'axios';
import { renderComponents } from '../core/functions/render';
import { API_ALL_EVENTS } from '../core/rest/paths';
import { initializeStore } from '../store/store';
const path = require('path');
const fs = require('fs');


export async function getStaticProps() {
  const dbPath = path.join(process.cwd(), 'db/demo/b.json');
  const componentsData = fs.readFileSync(dbPath, 'utf8');

  const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    props: {
      componentsData: JSON.parse(componentsData),
      events
    },
    revalidate: 1
  }
}


// export async function getServerSideProps() {
//   const dbPath = path.join(process.cwd(), 'db/db.json');
//   const components = fs.readFileSync(dbPath, 'utf8');

//   const reduxStore = initializeStore()
//   const { dispatch } = reduxStore

//   const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
//     .then(res => res.data)
//     .catch(err => console.log(err));

//   dispatch({
//       type: 'SET_EVENTS',
//       events
//   });

//   dispatch({
//       type: 'SET_DOCUMENT_COMPONENTS',
//       components: JSON.parse(components)
//   });

//   return {
//       props: {
//           initialReduxState: reduxStore.getState(),
//           components: JSON.parse(components)
//       }
//   }
// }


export default function Home(props) {

  // const Components = renderComponents(props.components);

  return (
    <div style={{border: '1px dashed black', width: '300px'}}>
      <h2>Home Page</h2>
    </div>
  )
}
