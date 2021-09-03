import { addComponent, addComponentToActive, closeModal, deleteComponent, setActiveComponent, setDragendComponent, setModal, unsetActiveComponent, unsetDragendComponent, updateComponentChildrenList } from "../../store/actions/document";
import { MODE } from "../config/site";
import { getChild, getComponent, getHandler, getModal, getParent } from "./components";


const actions = {
    openModal(state, dispatch, modalName) {
        const modal = getModal(state.componentsData, modalName);
        dispatch(setModal(modal));
    },

    closeModal(state, dispacth) {
        dispacth(closeModal());
    }
}

const onDragStart = (e, component) => {
    const {id, dispatch, componentData} = component
    dispatch(setDragendComponent(componentData));
    e.stopPropagation();
    e.target.style.opacity = '0.4';
    e.dataTransfer.setData('componentId', id);
    e.dataTransfer.effectAllowed = 'move';
}


const onDragEnter = (e, component) => {
    const {componentsData, componentData, dragendComponent, allowDrop, isDropBox, setDragCounter, dispatch} = component;
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
            dispatch(updateComponentChildrenList(parent.id, parentCopy.childrenList));
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
    const {isDropBox, dragendComponent, setAllowDrop, setDragCounter, dispatch} = component;
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

const onDrop = (e, component) => {
    const {id, componentsData, isDropBox, setAllowDrop, setDragCounter, dragendComponent, activeComponent, dispatch} = component;
    e.stopPropagation();
    if (isDropBox) {
        setAllowDrop(false);
        setDragCounter(0);
        const componentId = e.dataTransfer.getData('componentId');
        const template = e.dataTransfer.getData('template');

        if (dragendComponent) {
            dispatch(unsetDragendComponent());
        }
        if (id === componentId) return;

        if (componentId && !e.altKey) {
            const componentData = getComponent(componentsData, componentId);
            if (getChild(componentData, id)) return;
            dispatch(deleteComponent(componentId));
            dispatch(addComponent(id, componentData));
        }

        if (template) {
            if (template === 'Страница') return;
            activeComponent && dispatch(addComponentToActive(dragendComponent));
            dispatch(addComponent(id, dragendComponent));
        }

        if (e.altKey) {
            Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
        }
    }
}

const onMouseDown = (e, component) => {
    const {id, state, componentData, activeComponent, dispatch, handlers} = component;
    if (state.mode === 'admin') {
        e.stopPropagation();
        if (!activeComponent || activeComponent && activeComponent.id !== id) {
            dispatch(setActiveComponent(componentData));
        }
    }
}


const onClick = (e, component) => {
    const {id, state, componentData, activeComponent, dispatch, handlers} = component;

    if (state.mode === 'admin') {
        e.preventDefault();
        e.stopPropagation();
    }

    if (state.mode !== 'admin') {
        if (handlers && handlers.onClick) {
            const action = handlers.onClick[0].action;
            const params = handlers.onClick[0].params;
            actions[action](state, dispatch, ...params);
        }
    }
}


export {
    onDragStart,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragEnd,
    onDrop,
    onClick,
    onMouseDown
}
