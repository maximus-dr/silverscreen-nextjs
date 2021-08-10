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
    unsetDragendComponent
}

export {
    SET_ACTIVE_COMPONENT,
    UNSET_ACTIVE_COMPONENT,
    SET_RESOLUTION,
    SET_PROP,
    SET_COMPONENT_VALUE,
    SET_COMPONENT_NAME,
    ADD_COMPONENT,
    DELETE_COMPONENT,
    SET_DRAGEND_COMPONENT,
    UNSET_DRAGEND_COMPONENT,
    SET_DOCUMENT_COMPONENTS_DATA
}
