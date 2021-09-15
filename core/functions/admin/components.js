import { addComponent, addComponentToActive, deleteComponent, setActiveComponent, setDragendComponent, setModal, unsetActiveComponent, unsetDragendComponent, updateComponentChildrenList } from "../../../store/actions/document";
import { MODE } from "../../config/site";
import { generateNewId, getChild, getComponent, getHandler, getParent } from "../common/components";



const setValueToComponentsData = (componentsData, componentId, value) => {
    if (componentsData.id === componentId) {
        return {
            ...componentsData,
            value
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setValueToComponentsData(child, componentId, value);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}

const setLinkToComponentsData = (componentsData, componentId, link) => {
    if (componentsData.id === componentId) {
        return {
            ...componentsData,
            link
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setLinkToComponentsData(child, componentId, link);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}


const setNameToComponentsData = (componentsData, componentId, name) => {
    if (componentsData.id === componentId) {
        return {
            ...componentsData,
            name
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setNameToComponentsData(child, componentId, name);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}

const setUrlToComponentsData = (componentsData, componentId, url) => {
    if (componentsData.id === componentId) {
        return {
            ...componentsData,
            url
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setUrlToComponentsData(child, componentId, url);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}

const setForToComponentsData = (componentsData, componentId, value) => {
    if (componentsData.id === componentId) {
        return {
            ...componentsData,
            for: value
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setForToComponentsData(child, componentId, value);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}

const setLockToComponentsData = (componentsData, componentId, value) => {
    if (componentsData.id === componentId) {
        return {
            ...componentsData,
            locked: value
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setLockToComponentsData(child, componentId, value);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}


const addComponentToComponentsData = (state, containerId, component) => {
    if (!state) {
        return {...component}
    }
    if (state.id === containerId) {
        return {
            ...state,
            childrenList: [
                ...state.childrenList,
                component
            ]
        }
    }
    const children = state.childrenList.map((child) => {
        return addComponentToComponentsData(child, containerId, component);
    });
    return {
        ...state,
        childrenList: children
    }
}



const deleteComponentFromComponentsData = (state, componentId) => {
    let match = false;
    state.childrenList.forEach(child => {
        if (child.id === componentId) {
            match = true;
        }
    });
    if (match) {
        return {
            ...state,
            childrenList: state.childrenList.filter(item => item.id !== componentId)
        }
    }
    const children = state.childrenList.map(child => {
        return deleteComponentFromComponentsData(child, componentId);
    });
    return {
        ...state,
        childrenList: children
    }
}

const updateComponentIds = (component) => {
    const newId = generateNewId(10);
    const newComponent = {...component, id: newId};

    const childrenList = component.childrenList.map(child => {
        const childId = generateNewId(10);
        return updateComponentIds({...child, id: childId});
    });
    return {
        ...newComponent,
        childrenList
    }
}

const updateComponentChildrenListData = (componentsData, componentId, childrenList) => {
    if (componentsData.id === componentId) {
        return {
            ...componentsData,
            childrenList
        }
    }
    const children = componentsData.childrenList.map(child => {
        return updateComponentChildrenListData(child, componentId, childrenList);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}


export {
    setValueToComponentsData,
    setLinkToComponentsData,
    setNameToComponentsData,
    addComponentToComponentsData,
    deleteComponentFromComponentsData,
    updateComponentIds,
    updateComponentChildrenListData,
    setLockToComponentsData,
    setUrlToComponentsData,
    setForToComponentsData
}
