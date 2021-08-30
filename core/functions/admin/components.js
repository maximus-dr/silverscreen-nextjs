import { MODE } from "../../config/site";
import { generateNewId, getChild, getComponent, getHandler, getParent } from "../components";



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


const onDragStart = (e, component) => {
    const {setDragendComponent, id} = component
    setDragendComponent();
    e.stopPropagation();
    e.target.style.opacity = '0.4';
    e.dataTransfer.setData('componentId', id);
    e.dataTransfer.effectAllowed = 'move';
}


const onDragEnter = (e, component) => {
    const {componentsData, componentData, dragendComponent, allowDrop, isDropBox, setDragCounter, updateComponentChildrenList} = component;
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
            parentCopy.childrenList.splice(index, 0, component.dragendComponent);
            updateComponentChildrenList(parent.id, parentCopy.childrenList);
        }
    }
}

const onDragLeave = (e, component) => {
    const {isDropBox, setDragCounter} = component;
    e.stopPropagation();
    if (isDropBox) {
        if (!e.altKey) setDragCounter(prev => prev - 1);
        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
    }
}

const onDragOver = (e, component) => {
    if (component.isDropBox) {
        e.preventDefault();
        e.stopPropagation();
        if (!e.altKey) {
            e.dataTransfer.dropEffect = component.allowDrop ? e.dataTransfer.effectAllowed : 'none';
        }
        if (e.altKey) {
            e.dataTransfer.dropEffect = e.dataTransfer.effectAllowed;
        }
    }
}

const onDragEnd = (e, component) => {
    const {isDropBox, dragendComponent, setAllowDrop, setDragCounter, unsetDragendComponent} = component;
    e.stopPropagation();
    e.target.style.opacity = '1';
    if (isDropBox) {
        setAllowDrop(false);
        setDragCounter(0);
    }
    if (dragendComponent) {
        unsetDragendComponent();
    }
}

const onDrop = (e, component) => {
    const {isDropBox, setAllowDrop, setDragCounter, dragendComponent, unsetDragendComponent, id, componentsData, addComponent, addComponentToActive, activeComponent, deleteComponent} = component;
    e.stopPropagation();
    if (isDropBox) {
        setAllowDrop(false);
        setDragCounter(0);
        const componentId = e.dataTransfer.getData('componentId');
        const template = e.dataTransfer.getData('template');

        if (dragendComponent) {
            unsetDragendComponent();
        }
        if (id === componentId) return;

        if (componentId && !e.altKey) {
            const componentData = getComponent(componentsData, componentId);
            if (getChild(componentData, id)) return;
            deleteComponent(componentId);
            addComponent(id, componentData);
        }

        if (template) {
            if (template === 'Страница') return;
            activeComponent && addComponentToActive(dragendComponent);
            addComponent(id, dragendComponent);
        }

        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
    }
}

const onClick = (e, component) => {
    const {id, componentData, activeComponent, unsetActiveComponent, setActiveComponent} = component;
    if (MODE === 'admin') {
        e.stopPropagation();
        if (activeComponent && activeComponent.id === id) {
            unsetActiveComponent();
            return;
        }
        setActiveComponent(componentData);
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
    onDrop,
    onClick
}
