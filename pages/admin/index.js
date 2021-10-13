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
import { setDocumentComponentsData, setMode, setPage, setResolution, setTemplates } from "../../store/actions/document";
import { useSelector } from "react-redux";
import { renderComponents } from "../../core/functions/render";
import { getComponent } from "../../core/functions/common/components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDataList } from "../../store/actions/data";
import { fetchDataList } from "../../core/functions/common/common";



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

    const dbPath = path.join(process.cwd(), 'db/admin.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const componentsData = JSON.parse(data);
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    const templatesData = fs.readFileSync(path.join(process.cwd(), 'db/admin/templates/templates.json'), 'utf8');
    const templates = JSON.parse(templatesData);

    const dataList = fetchDataList(fs, path);

    dispatch(setDataList(dataList));
    dispatch(setDocumentComponentsData(componentsData));
    dispatch(setTemplates(templates));
    dispatch(setResolution('1024'));
    dispatch(setMode('admin'));

    return {
        props: {
            initialReduxState: reduxStore.getState()
        }
    }
}



function AdminMainPage() {

    const state = useSelector(state => state);
    const {componentsData, resolution, page} = state.document;
    const activePage = page ? getComponent(componentsData, page) : null;
    const modalData = useSelector(state => state.document.modal);
    const modal = modalData ? renderComponents(getComponent(componentsData, modalData.id), state) : null;
    const dispatch = useDispatch();
    const pages = componentsData.childrenList.find(item => item.typeName === 'pages');
    const isSinglePage = pages.childrenList.length === 1 && !page;

    const components = renderComponents(activePage, state);

    useEffect(() => {
        const sessionActivePage = sessionStorage.getItem('admin_active_page');
        if (sessionActivePage) {
            dispatch(setPage(sessionActivePage));
            return;
        }
        if (pages.childrenList.length > 0) {
            dispatch(setPage(pages.childrenList[0].id));
            return;
        }
    }, [dispatch, pages]);

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

export default AdminMainPage;
