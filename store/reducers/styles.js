import { SET_STYLES_ELEMENT, SET_RESOLUTION, SET_STYLES_PSEUDO_CLASS, SET_STYLES, CLEAR_COMPONENT_ELEMENT, CLEAR_STYLES } from "../actions/styles";

const initialState = {
    resolution: 'screen_mobile',
    element: null
}

export const stylesReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_RESOLUTION:
            return {
                ...state,
                resolution: action.resolution
            }
        case SET_STYLES_ELEMENT:
            return {
                ...state,
                element: action.element
            }
        case CLEAR_COMPONENT_ELEMENT:
            return {
                ...state,
                element: null
            }
        case SET_STYLES_PSEUDO_CLASS:
            return {
                ...state,
                pseudoClass: action.pseudoClass
            }
        case SET_STYLES:
            return {
                ...state,
                styles: action.styles
            }
        case CLEAR_STYLES:
            return {
                ...state,
                styles: null
            }
        default:
            return state
    }
}
