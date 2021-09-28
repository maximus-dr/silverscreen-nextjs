import React from "react";
import Link from 'next/link';

export async function getServerSideProps() {



    return {
        props: {
            // initialReduxState: reduxStore.getState()
        }
    }
}

export default function Afisha() {

    // const componentsData = useSelector(state => state.document.componentsData);
    // const components = renderComponents(componentsData);

  return (
    <div style={{backgroundImage: `url('https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/6583.png')`, minHeight: '100vh', color: '#fffffff'}}>
        <Link href='/admin'><a style={{color: '#ffffff'}}>Admin</a></Link>
        <h2>Dune</h2>
        {/* {components} */}
    </div>
  )
}
