
export const documentReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_DOCUMENT':
            return {
                ...state,
                tree: action.document
            }
        default:
            return state
    }
}
