import axios from 'axios'
import { renderComponents } from '../core/functions/render';


export async function getStaticProps() {
  const res = await axios('http://localhost:3001/db.json');
  const pageData = await res.data;

  return {
    props: {
      pageData
    }
  }
}

export default function MainPage(props) {
  const components = renderComponents(props.pageData);

  return (
    <>
      {components}
    </>
  )
}
