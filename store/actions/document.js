export const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
export const UNSET_ACTIVE_COMPONENT = 'UNSET_ACTIVE_COMPONENT';
export const SET_COMPONENT_ELEMENT = 'SET_COMPONENT_ELEMENT';
export const CLEAR_COMPONENT_ELEMENT = 'CLEAR_COMPONENT_ELEMENT';
export const SET_RESOLUTION = 'SET_RESOLUTION';
export const SET_PROP = 'SET_PROP';
export const SET_COMPONENT_VALUE = 'SET_COMPONENT_VALUE';
export const SET_COMPONENT_NAME = 'SET_COMPONENT_NAME';
export const ADD_COMPONENT = 'ADD_COMPONENT';
export const DELETE_COMPONENT = 'DELETE_COMPONENT';
export const SET_DRAGEND_COMPONENT = 'SET_DRAGEND_COMPONENT';
export const UNSET_DRAGEND_COMPONENT = 'UNSET_DRAGEND_COMPONENT';



const setActiveComponent = (activeComponent) => ({
    type: SET_ACTIVE_COMPONENT,
    activeComponent
});

const unsetActiveComponent = () => ({
    type: UNSET_ACTIVE_COMPONENT
});

const setComponentElement = (elementName) => ({
    type: SET_COMPONENT_ELEMENT,
    element: elementName
});

const clearComponentElement = () => ({
    type: CLEAR_COMPONENT_ELEMENT
});

const setResolution = (resolution) => ({
    type: SET_RESOLUTION,
    resolution
});

const setProp = (prop) => ({
    type: SET_PROP,
    prop
});

const setComponentValue = (value, id) => ({
    type: SET_COMPONENT_VALUE,
    value,
    id
});

const setComponentName = (name, id) => ({
    type: SET_COMPONENT_NAME,
    name,
    id
});

const addComponent = (containerId, component) => ({
    type: ADD_COMPONENT,
    containerId,
    component
});

const deleteComponent = (componentId) => ({
    type: DELETE_COMPONENT,
    componentId
});

const setDragendComponent = (componentData) => ({
    type: SET_DRAGEND_COMPONENT,
    componentData
});

const unsetDragendComponent = () => ({
    type: UNSET_DRAGEND_COMPONENT
})



export {
    setActiveComponent,
    unsetActiveComponent,
    setComponentElement,
    clearComponentElement,
    setResolution,
    setProp,
    setComponentValue,
    setComponentName,
    addComponent,
    deleteComponent,
    setDragendComponent,
    unsetDragendComponent
}
