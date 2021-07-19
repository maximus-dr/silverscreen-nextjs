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
            if (action.prop.hasElements) {
                return {
                    ...state,
                    activeComponent: {
                        ...state.activeComponent,
                        styles: {
                            ...state.activeComponent.styles,
                            [action.prop.element]:  {
                                ...state.activeComponent.styles[action.prop.element],
                                [action.prop.resolution]: {
                                    ...state.activeComponent.styles[action.prop.element][action.prop.resolution],
                                    [action.prop.name]: action.prop.value
                                }
                            }
                        }
                    }
                }
            }
        default:
            return state
    }
}
