import Header from "../../components/admin/Dashboard/Header/Header";
import SidebarLeft from "../../components/admin/Dashboard/SidebarLeft/SidebarLeft";
import Main from "../../components/admin/Dashboard/Main/Main";
import SidebarRight from "../../components/admin/Dashboard/SidebarRight/SidebarRight";
import Wrapper from "../../components/admin/Dashboard/Wrapper/Wrapper";
import Workspace from "../../components/admin/Dashboard/Workspace/Workspace";
import axios from 'axios';
import { API_ALL_EVENTS } from "../../core/rest/paths";
const path = require('path');
const fs = require('fs');
import React from 'react'
import { initializeStore } from "../../store/store";
import { getComponentsList } from "../../core/functions/render";



// export async function getStaticProps() {
//     const dbPath = path.join(process.cwd(), 'db/db.json');
//     const components = fs.readFileSync(dbPath, 'utf8');

//     const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
//     .then(res => res.data)
//     .catch(err => console.log(err));

//     return {
//         props: {
//             initialReduxState: {
//                 events
//             },
//             components: JSON.parse(components)
//         },
//         revalidate: 1
//     }
// }


export async function getServerSideProps() {
    const dbPath = path.join(process.cwd(), 'db/test.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const componentsData = JSON.parse(data);
    
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
      .then(res => res.data)
      .catch(err => console.log(err));
    
    dispatch({
        type: 'SET_EVENTS',
        events
    });

    dispatch({
        type: 'SET_DOCUMENT_COMPONENTS_DATA',
        componentsData: componentsData
    });

    dispatch({
        type: 'SET_DOCUMENT_COMPONENTS',
        components: getComponentsList(componentsData)
    });

    return { 
        props: { 
            initialReduxState: reduxStore.getState(),
            components: componentsData
        } 
    }
}

export default function AdminMainPage() {

    return (
        <Wrapper>
            <Header style={{position: 'fixed', left: '0', right: '0'}}></Header>
            <Main>
                <SidebarLeft />
                <Workspace />
                <SidebarRight />
            </Main>
        </Wrapper>
    );
}
