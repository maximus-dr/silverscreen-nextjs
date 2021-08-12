import { generateNewId } from "../components";

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

export {
    setValueToComponentsData,
    setNameToComponentsData,
    addComponentToComponentsData,
    deleteComponentFromComponentsData,
    updateComponentIds
}
