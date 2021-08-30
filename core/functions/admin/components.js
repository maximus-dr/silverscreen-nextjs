import { addComponent, addComponentToActive, deleteComponent, setDragendComponent, unsetDragendComponent, updateComponentChildrenList } from "../../../store/actions/document";
import { generateNewId, getChild, getComponent, getParent } from "../components";

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


const onDragStart = (e, id, componentData, dispatch) => {
    dispatch(setDragendComponent(componentData));
    e.stopPropagation();
    e.target.style.opacity = '0.4';
    e.dataTransfer.setData('componentId', id);
    e.dataTransfer.effectAllowed = 'move';
}


const onDragEnter = (e, componentsData, componentData, dragendComponent, isDropBox, allowDrop, setDragCounter, dispatch) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.id === dragendComponent.id) return;

    if (isDropBox) {
        if (!e.altKey) {
            e.dataTransfer.dropEffect = allowDrop ? e.dataTransfer.effectAllowed : 'none';
        }
        if (!e.altKey) setDragCounter(prev => prev + 1);
    }

    if (e.altKey) {
        if (isDropBox) {
            if (!Array.from(e.target.children).find(item => item.id === dragendComponent.id)) {
                Array.from(e.target.children).forEach(item => item.style.pointerEvents = 'none');
            };
        }
        const parent = getParent(componentsData, componentData.id);
        const hasCommonParent = parent.childrenList.includes(dragendComponent);

        if (hasCommonParent) {
            const index = parent.childrenList.indexOf(componentData);
            const parentCopy = {
                ... parent,
                childrenList: [...parent.childrenList]
            };
            parentCopy.childrenList.splice(parentCopy.childrenList.indexOf(dragendComponent), 1);
            parentCopy.childrenList.splice(index, 0, dragendComponent);
            dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
        }
    }
}

const onDragLeave = (e, isDropBox, setDragCounter) => {
    e.stopPropagation();
    if (isDropBox) {
        if (!e.altKey) setDragCounter(prev => prev - 1);
        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
    }
}

const onDragOver = (e, isDropBox, allowDrop) => {
    if (isDropBox) {
        e.preventDefault();
        e.stopPropagation();
        if (!e.altKey) {
            e.dataTransfer.dropEffect = allowDrop ? e.dataTransfer.effectAllowed : 'none';
        }
        if (e.altKey) {
            e.dataTransfer.dropEffect = e.dataTransfer.effectAllowed;
        }
    }
}

const onDragEnd = (e, isDropBox, setAllowDrop, setDragCounter, dragendComponent, dispatch) => {
    e.stopPropagation();
    e.target.style.opacity = '1';
    if (isDropBox) {
        setAllowDrop(false);
        setDragCounter(0);
    }
    if (dragendComponent) {
        dispatch(unsetDragendComponent());
    }
}


const onDrop = (e, targetId, isDropBox, setAllowDrop, setDragCounter, dragendComponent, dispatch, activeComponent, componentsData) => {
    e.stopPropagation();
    if (isDropBox) {
        setAllowDrop(false);
        setDragCounter(0);
        const componentId = e.dataTransfer.getData('componentId');
        const template = e.dataTransfer.getData('template');

        if (dragendComponent) {
            dispatch(unsetDragendComponent());
        }
        if (targetId === componentId) return;

        if (componentId && !e.altKey) {
            const component = getComponent(componentsData, componentId);
            if (getChild(component, targetId)) return;
            dispatch(deleteComponent(componentId));
            dispatch(addComponent(targetId, component));
        }

        if (template) {
            if (template === 'Страница') return;
            activeComponent && dispatch(addComponentToActive(dragendComponent));
            dispatch(addComponent(targetId, dragendComponent));
        }

        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
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
    onDragStart,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragEnd,
    onDrop
}
