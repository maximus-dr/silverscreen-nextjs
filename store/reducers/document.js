
export const documentReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_DOCUMENT_COMPONENTS':
            return {
                ...state,
                components: action.components
            }
        default:
            return state
    }
}
