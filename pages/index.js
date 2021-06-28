
import { renderComponents } from '../core/functions/render';
const path = require('path');
const fs = require('fs');


export async function getStaticProps() {
  const dbPath = path.join(process.cwd(), 'db.json');
  const data = fs.readFileSync(dbPath, 'utf8');

  return {
    props: {
      pageData: JSON.parse(data)
    },
    revalidate: 1
  }
}

export default function Home(props) {

  const Components = renderComponents(props.pageData);
  return (
    <>
      {Components}    
    </>
  )
}
