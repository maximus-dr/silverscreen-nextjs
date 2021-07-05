import Header from "../../components/admin/Dashboard/Header/Header";
import SidebarLeft from "../../components/admin/Dashboard/SidebarLeft/SidebarLeft";
import Main from "../../components/admin/Dashboard/Main/Main";
import SidebarRight from "../../components/admin/Dashboard/SideBarRight/SideBarRight";
import Wrapper from "../../components/admin/Dashboard/Wrapper/Wrapper";
import Workspace from "../../components/admin/Dashboard/Workspace/Workspace";
import axios from 'axios';
import { API_ALL_EVENTS } from "../../core/rest/paths";
const path = require('path');
const fs = require('fs');
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { initializeStore } from "../../store/store";


function TreeNode(props) {
    return (
        <div>
            <span>{props.nodeData.typeName}</span>
            <div>{props.children}</div>
        </div>
    )
}


function renderDocumentTree(nodeData) {
    const props = {
        nodeData,
        id: nodeData.id,
        component: TreeNode
    }

    return getTreeNodes(props);
}

function getTreeNodes(props) {
    if (!props.nodeData) return;

    const getChildNodes = (props) => {
        return (
            props.nodeData.childrenList &&
            props.nodeData.childrenList.length > 0 &&
            props.nodeData.childrenList.map(child => {

                const childProps = {
                    nodeData: child,
                    id: child.id,
                    component: TreeNode
                }
                return getTreeNodes(childProps);
            })
        )
    }

    const result = (
        <props.component key={props.id} nodeData={props.nodeData}>
            {getChildNodes(props)}
        </props.component>
    );

    return result;
}

export async function getStaticProps() {
    const dbPath = path.join(process.cwd(), 'db/db.json');
    const components = fs.readFileSync(dbPath, 'utf8');

    const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        props: {
            initialReduxState: {
                events
            },
            components: JSON.parse(components)
        },
        revalidate: 1
    }
}


// export async function getServerSideProps() {
//     const dbPath = path.join(process.cwd(), 'db/db.json');
//     const components = fs.readFileSync(dbPath, 'utf8');
    
//     const reduxStore = initializeStore()
//     const { dispatch } = reduxStore

//     const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
//       .then(res => res.data)
//       .catch(err => console.log(err));
    
//     dispatch({
//         type: 'SET_EVENTS',
//         events
//     });

//     return { 
//         props: { 
//             initialReduxState: reduxStore.getState(),
//             components: JSON.parse(components)
//         } 
//     }
// }

export default function AdminMainPage(props) {

    const document = renderDocumentTree(props.components);
    const dispatch = useDispatch();

    useEffect(() => {
        if (document) {
            dispatch({ type: 'SET_DOCUMENT', document});
        }
    }, [dispatch, document]);

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
