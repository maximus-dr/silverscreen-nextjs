export const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
export const UNSET_ACTIVE_COMPONENT = 'UNSET_ACTIVE_COMPONENT';
export const SET_COMPONENT_ELEMENT = 'SET_COMPONENT_ELEMENT';
export const CLEAR_COMPONENT_ELEMENT = 'CLEAR_COMPONENT_ELEMENT';
export const SET_RESOLUTION = 'SET_RESOLUTION';
export const SET_PROP = 'SET_PROP';

export const setActiveComponent = (activeComponent) => ({
    type: SET_ACTIVE_COMPONENT,
    activeComponent
});

export const unsetActiveComponent = () => ({
    type: UNSET_ACTIVE_COMPONENT
});

export const setComponentElement = (elementName) => ({
    type: SET_COMPONENT_ELEMENT,
    element: elementName
});

export const clearComponentElement = () => ({
    type: CLEAR_COMPONENT_ELEMENT
});

export const setResolution = (resolution) => ({
    type: SET_RESOLUTION,
    resolution
});

export const setProp = (prop) => ({
    type: SET_PROP,
    prop
});
