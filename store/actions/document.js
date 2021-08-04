export const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
export const UNSET_ACTIVE_COMPONENT = 'UNSET_ACTIVE_COMPONENT';
export const SET_COMPONENT_ELEMENT = 'SET_COMPONENT_ELEMENT';
export const CLEAR_COMPONENT_ELEMENT = 'CLEAR_COMPONENT_ELEMENT';
export const SET_RESOLUTION = 'SET_RESOLUTION';
export const SET_PROP = 'SET_PROP';
export const SET_COMPONENT_VALUE = 'SET_COMPONENT_VALUE';
export const SET_COMPONENT_NAME = 'SET_COMPONENT_NAME';
export const ADD_COMPONENT_TO_LIST = 'ADD_COMPONENT_TO_LIST';
export const ADD_COMPONENT = 'ADD_COMPONENT';
export const DELETE_COMPONENT = 'DELETE_COMPONENT';
export const DELETE_COMPONENT_FROM_LIST = 'DELETE_COMPONENT_FROM_LIST';
export const UPDATE_COMPONENTS_LIST = 'UPDATE_COMPONENTS_LIST';



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

const addComponentToList = (component) => ({
    type: ADD_COMPONENT_TO_LIST,
    component
});

const deleteComponentFromList = (componentId) => ({
	type: DELETE_COMPONENT_FROM_LIST,
	componentId
});

const updateComponentsList = (componentId, parentId, targetId, component) => ({
    type: UPDATE_COMPONENTS_LIST,
    componentId,
    parentId,
    targetId,
    component
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
    addComponentToList,
    deleteComponent,
	deleteComponentFromList,
    updateComponentsList
}
