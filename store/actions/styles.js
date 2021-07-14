export const SET_RESOLUTION = 'SET_RESOLUTION';
export const SET_STYLES_ELEMENT = 'SET_STYLES_ELEMENT';
export const SET_STYLES_PSEUDO_CLASS = 'SET_STYLES_PSEUDO_CLASS';
export const SET_STYLES = 'SET_STYLES';
export const CLEAR_STYLES = 'CLEAR_STYLES';
export const CLEAR_COMPONENT_ELEMENT = 'CLEAR_COMPONENT_ELEMENT';


export const setResolution = (resolution) => ({
    type: SET_RESOLUTION,
    resolution
});

export const setStylesElement = (elementName) => ({
    type: SET_STYLES_ELEMENT,
    element: elementName
});

export const clearComponentElement = () => ({
    type: CLEAR_COMPONENT_ELEMENT
});

export const setStylesPseudoClass = (pseudoClass) => ({
    type: SET_STYLES_PSEUDO_CLASS,
    pseudoClass
});

export const setStyles = (element, resolution, styles) => ({
    type: SET_STYLES,
    element,
    resolution,
    styles
});

export const clearStyles = () => ({
    type: CLEAR_STYLES
});
