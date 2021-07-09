import { SET_RESOLUTION } from "../actions/styles";

export const stylesReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_RESOLUTION:
            return {
                ...state,
                resolution: action.resolution
            }
        default:
            return state
    }
}
