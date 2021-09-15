import { getChild, getComponent, getParent } from "../core/functions/common/components";
import { addComponent, addComponentToActive, deleteComponent, setActiveComponent, setDragendComponent, unsetDragendComponent, updateComponentChildrenList } from "../store/actions/document";



export const componentActions = {

    admin: {
        onClick(e) {
            e.preventDefault();
            e.stopPropagation();
        },

        onMouseDown(e, component) {
            const {id, state, dispatch, componentData} = component;
            const {activeComponent} = state.document;
            e.stopPropagation();
            if (!activeComponent || activeComponent && activeComponent.id !== id) {
                dispatch(setActiveComponent(componentData));
            }
        },

        onDragStart(e, component) {
            const {id, dispatch, componentData} = component;
            dispatch(setDragendComponent(componentData));
            e.stopPropagation();
            e.target.style.opacity = '0.4';
            e.dataTransfer.setData('componentId', id);
            e.dataTransfer.effectAllowed = 'move';
        },

        onDragEnter(e, component) {
            const {state, componentData, allowDrop, isDropBox, setDragCounter, dispatch} = component;
            const {dragendComponent, componentsData} = state.document;

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
        },

        onDragLeave(e, component) {
            const {isDropBox, setDragCounter} = component;
            e.stopPropagation();
            if (isDropBox) {
                if (!e.altKey) setDragCounter(prev => prev - 1);
                if (e.altKey) {
                    Array.from(e.target.children).forEach(item => item.style.pointerEvents = '');
                }
            }
        },

        onDragOver(e, component) {
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
        },

        onDragEnd(e, component) {
            const {state, isDropBox, setAllowDrop, setDragCounter, dispatch} = component;
            const {dragendComponent} = state.document;
            e.stopPropagation();
            e.target.style.opacity = '1';
            if (isDropBox) {
                setAllowDrop(false);
                setDragCounter(0);
            }
            if (dragendComponent) {
                dispatch(unsetDragendComponent());
            }
        },

        onDrop(e, component) {
            const {id, state, isDropBox, setAllowDrop, setDragCounter, dispatch} = component;
            const {componentsData, dragendComponent, activeComponent} = state.document;
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
    },

    preview: {
        onClick(e, component) {
            const {state, dispatch, handlers} = component;
            if (handlers && handlers.onClick) {
                const action = handlers.onClick[0].action;
                const params = handlers.onClick[0].params;
                actions[action](state.document, dispatch, ...params);
            }
        },
    }
}
