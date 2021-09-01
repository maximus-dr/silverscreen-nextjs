import Header from "../../components/admin/Header/Header";
import SidebarLeft from "../../components/admin/SidebarLeft/SidebarLeft";
import Main from "../../components/admin/Main/Main";
import SidebarRight from "../../components/admin/SidebarRight/SidebarRight";
import Wrapper from "../../components/admin/Wrapper/Wrapper";
import Workspace from "../../components/admin/Workspace/Workspace";
const path = require('path');
const fs = require('fs');
import React from 'react'
import { initializeStore } from "../../store/store";
import { setDocumentComponentsData, setResolution, setTemplates } from "../../store/actions/document";
import { useSelector } from "react-redux";
import { renderComponents } from "../../core/functions/render";
import { getComponent } from "../../core/functions/components";


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


export default function AdminMainPage() {

    const componentsData = useSelector(state => state.document.componentsData);
    const resolution = useSelector(state => state.document.resolution);

    const activePage = useSelector(state => state.document.page);
    const page = activePage ? getComponent(componentsData, activePage) : null;
    const components = renderComponents(page);
    const modalData = useSelector(state => state.document.modal);
    const modal = modalData ? renderComponents(getComponent(componentsData, modalData.id)) : null;



    return (
        <Wrapper>
            <Header />
            <Main>
                <SidebarLeft />
                <Workspace
                    components={components}
                    modal={modal}
                    resolution={resolution}
                />
                <SidebarRight />
            </Main>
        </Wrapper>
    );
}
