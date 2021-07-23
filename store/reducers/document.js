import { CLEAR_COMPONENT_ELEMENT, SET_RESOLUTION, SET_COMPONENT_ELEMENT, SET_PROP } from "../actions/document"


export const documentReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_DOCUMENT_COMPONENTS_DATA':
            return {
                ...state,
                componentsData: action.componentsData
            }
        case 'SET_DOCUMENT_COMPONENTS':
            return {
                ...state,
                components: action.components
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
        case SET_COMPONENT_ELEMENT:
            return {
                ...state,
                element: action.element
                
            }
        case CLEAR_COMPONENT_ELEMENT:
            return {
                ...state,
                element: null
            }
        case SET_RESOLUTION:
            return {
                ...state,
                resolution: action.resolution
            }
        case SET_PROP:

            return {
                ...state,
                components: {
                    ...state.components,
                    [action.prop.id]: {
                        ...state.components[action.prop.id],
                        styles: {
                            ...state.components[action.prop.id].styles,
                            common: {
                                ...state.components[action.prop.id].styles.common,
                                [action.prop.name]: action.prop.value
                            }
                        }
                    } 
                    
                }
            }

        default:
            return state
    }
}
