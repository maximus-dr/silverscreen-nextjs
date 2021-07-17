
export const documentReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_DOCUMENT_COMPONENTS':
            return {
                ...state,
                componentsData: action.componentsData
            }
        case 'SET_ACTIVE_COMPONENT':
            return {
                ...state,
                activeComponent: action.activeComponent
            }
        case 'UNSET_ACTIVE_COMPONENT':
            return {
                ...state,
                activeComponent: null
            }
        default:
            return state
    }
}
