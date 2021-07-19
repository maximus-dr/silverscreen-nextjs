export const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
export const UNSET_ACTIVE_COMPONENT = 'UNSET_ACTIVE_COMPONENT';
export const SET_STYLES_ELEMENT = 'SET_STYLES_ELEMENT';
export const CLEAR_COMPONENT_ELEMENT = 'CLEAR_COMPONENT_ELEMENT';

export const setActiveComponent = (activeComponent) => ({
    type: SET_ACTIVE_COMPONENT,
    activeComponent
});

export const unsetActiveComponent = () => ({
    type: UNSET_ACTIVE_COMPONENT
});

export const setStylesElement = (elementName) => ({
    type: SET_STYLES_ELEMENT,
    element: elementName
});

export const clearComponentElement = () => ({
    type: CLEAR_COMPONENT_ELEMENT
});
