import { SET_STYLES_PSEUDO_CLASS, SET_STYLES, CLEAR_STYLES } from "../actions/styles";

const initialState = {
    resolution: 'screen_mobile',
    element: null
}

export const stylesReducer = (state = {}, action) => {
    switch(action.type) {
        
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
