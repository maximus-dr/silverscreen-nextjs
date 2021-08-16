const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
const UNSET_ACTIVE_COMPONENT = 'UNSET_ACTIVE_COMPONENT';
const SET_RESOLUTION = 'SET_RESOLUTION';
const SET_PROP = 'SET_PROP';
const SET_COMPONENT_VALUE = 'SET_COMPONENT_VALUE';
const SET_COMPONENT_NAME = 'SET_COMPONENT_NAME';
const ADD_COMPONENT = 'ADD_COMPONENT';
const DELETE_COMPONENT = 'DELETE_COMPONENT';
const SET_DRAGEND_COMPONENT = 'SET_DRAGEND_COMPONENT';
const UNSET_DRAGEND_COMPONENT = 'UNSET_DRAGEND_COMPONENT';
const SET_DOCUMENT_COMPONENTS_DATA = 'SET_DOCUMENT_COMPONENTS_DATA';
const SET_COMPONENT_TO_BUFFER = 'SET_COMPONENT_TO_BUFFER';
const UPDATE_COMPONENT_CHILDRENLIST = 'UPDATE_COMPONENT_CHILDRENLIST';
const UPDATE_ACTIVE_COMPONENT_CHILDRENLIST = 'UPDATE_ACTIVE_COMPONENT_CHILDRENLIST';
const ADD_COMPONENT_TO_ACTIVE = 'ADD_COMPONENT_TO_ACTIVE';



const setDocumentComponentsData = (componentsData) => ({
    type: SET_DOCUMENT_COMPONENTS_DATA,
    componentsData
});

const setActiveComponent = (activeComponent) => ({
    type: SET_ACTIVE_COMPONENT,
    activeComponent
});

const unsetActiveComponent = () => ({
    type: UNSET_ACTIVE_COMPONENT
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

const updateComponentChildrenList = (componentId, childrenList) => ({
    type: UPDATE_COMPONENT_CHILDRENLIST,
    componentId,
    childrenList
});

const updateActiveComponentChildrenList = (childrenList) => ({
    type: UPDATE_ACTIVE_COMPONENT_CHILDRENLIST,
    childrenList
})

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
});

const setComponentToBuffer = (component) => ({
    type: SET_COMPONENT_TO_BUFFER,
    component
});

const addComponentToActive = (component) => ({
    type: ADD_COMPONENT_TO_ACTIVE,
    component
});



export {
    setDocumentComponentsData,
    setActiveComponent,
    unsetActiveComponent,
    setResolution,
    setProp,
    setComponentValue,
    setComponentName,
    addComponent,
    deleteComponent,
    setDragendComponent,
    unsetDragendComponent,
    setComponentToBuffer,
    updateComponentChildrenList,
    updateActiveComponentChildrenList,
    addComponentToActive
}

export {
    SET_ACTIVE_COMPONENT,
    UNSET_ACTIVE_COMPONENT,
    SET_RESOLUTION,
    SET_PROP,
    SET_COMPONENT_VALUE,
    SET_COMPONENT_NAME,
    UPDATE_COMPONENT_CHILDRENLIST,
    UPDATE_ACTIVE_COMPONENT_CHILDRENLIST,
    ADD_COMPONENT,
    DELETE_COMPONENT,
    SET_DRAGEND_COMPONENT,
    UNSET_DRAGEND_COMPONENT,
    SET_DOCUMENT_COMPONENTS_DATA,
    SET_COMPONENT_TO_BUFFER,
    ADD_COMPONENT_TO_ACTIVE
}
