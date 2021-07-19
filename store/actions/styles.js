export const SET_RESOLUTION = 'SET_RESOLUTION';
export const SET_STYLES_PSEUDO_CLASS = 'SET_STYLES_PSEUDO_CLASS';
export const SET_STYLES = 'SET_STYLES';
export const CLEAR_STYLES = 'CLEAR_STYLES';



export const setResolution = (resolution) => ({
    type: SET_RESOLUTION,
    resolution
});





export const setStylesPseudoClass = (pseudoClass) => ({
    type: SET_STYLES_PSEUDO_CLASS,
    pseudoClass
});

export const setStyles = (styles) => ({
    type: SET_STYLES,
    styles
});

export const clearStyles = () => ({
    type: CLEAR_STYLES
});
