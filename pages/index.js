import axios from 'axios';
import { renderComponents } from '../core/functions/render';
import { API_ALL_EVENTS } from '../core/rest/paths';
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
      components: JSON.parse(components),
      events
    },
    revalidate: 1
  }
}


export default function Home(props) {

  const Components = renderComponents(props.components);

  return (
    <>
      {Components}
    </>
  )
}
