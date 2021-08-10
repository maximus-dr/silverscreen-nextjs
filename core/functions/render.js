import { Provider } from '../../components';
import DocumentTree from '../../components/admin/Panels/PanelDocument/DocumentTree/DocumentTree';



const renderComponents = (componentData) => {
    if (!componentData || Object.keys(componentData) === 0) return;
    const props = {
        componentData,
        id: componentData.id,
        component: Provider[componentData.typeName]
    }
    return getComponents(props);
}


// рекурсивно перебирает json по typeName и возвращает react компонент с вложенными react компонентами
const getComponents = (props) => {
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


// отрисовка дерева документа в админке
const renderDocumentTree = (nodeData) => {
    if (!nodeData || Object.keys(nodeData).length === 0) return null;
    const props = {
        nodeData,
        id: nodeData.id,
        component: DocumentTree
    }
    return <GetTreeNodes {...props} />;
}


const GetTreeNodes = (props) => {
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


const getComponentFromTree = (root, id) => {
	if (root.id === id) {
		return root;
	};
	root.childrenList.forEach(child => {
		getComponentFromTree(child, id);
	});
}



export {
    renderComponents,
    renderDocumentTree,
    getComponentFromTree
}
