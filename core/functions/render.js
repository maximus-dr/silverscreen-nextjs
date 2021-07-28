import { Provider } from '../../components';
import DocumentTree from '../../components/admin/Panels/PanelDocument/DocumentTree/DocumentTree';




export function renderComponents(componentData) {
    const props = {
        componentData,
        id: componentData.id,
        component: Provider[componentData.typeName]
    }

    return getComponents(props);
}


// рекурсивно перебирает json по typeName и возвращает react компонент с вложенными react компонентами 
function getComponents(props) {

    if (!props.componentData) return;
    if (!props.componentData.id) console.log(`Не задан id у компонента ${props.componentData.typeName}`);

    const getChildrenComponents = (props) => {
        return (
        props.componentData.childrenList &&
        props.componentData.childrenList.length > 0 &&
        props.componentData.childrenList.map(child => {
            const component = Provider[child.typeName];

            if (component) {
            const childProps = {
                id: child.id,
                component: Provider[child.typeName],
                componentData: child
            }
            return getComponents(childProps);
            }

            if (!component) {
            console.log(`Компонент "${child.typeName}" не найден. Проверьте компонент id: ${props.componentData.id}`);
            }
        }));
    }

    const result = (
        <props.component key={props.id} componentData={props.componentData}>
            { getChildrenComponents(props) }
        </props.component>
    );

    return result;
}



export function getComponentsList(componentsData, result = {}) {

    // const noChildrenList = ({childrenList, ...rest}) => rest;
    result[componentsData.id] = {...componentsData};

    if (componentsData.childrenList && componentsData.childrenList.length > 0) {
        componentsData.childrenList.forEach(child => {
            if (result[child.id]) {
                console.log(`Дублирование id: ${child.id}`)
            }

            getComponentsList(child, result);
        })
    }

    return result;
}


// отрисовка дерева документа в админке
export function renderDocumentTree(nodeData) {
    const props = {
        nodeData,
        id: nodeData.id,
        component: DocumentTree
    }

    return <GetTreeNodes {...props} />;
}


export function GetTreeNodes(props) {

    if (!props.nodeData) return;

    const getChildNodes = (props) => {
        return (
            props.nodeData.childrenList &&
            props.nodeData.childrenList.length > 0 &&
            props.nodeData.childrenList.map(child => {

                const childProps = {
                    nodeData: child,
                    id: child.id,
                    component: DocumentTree
                }
                return <GetTreeNodes key={child.id} {...childProps} />;
            })
        )
    }

    let handler;

    if (props.nodeData.childrenList && props.nodeData.childrenList.length > 0) {
        handler = () => {
            setExpanded(prev => !prev);
        };
    }

    const result = (
        <props.component key={props.id} nodeData={props.nodeData} onClick={handler} >
            {getChildNodes(props)}
        </props.component>
    );

    return result;
}
