import { addComponentIntoTree, deleteComponent } from "../../core/functions/components";
import { CLEAR_COMPONENT_ELEMENT, SET_RESOLUTION, SET_COMPONENT_ELEMENT, SET_PROP, SET_COMPONENT_NAME, ADD_COMPONENT, DELETE_COMPONENT, SET_DRAGEND_COMPONENT, UNSET_DRAGEND_COMPONENT } from "../actions/document"
import { SET_COMPONENT_VALUE } from './../actions/document';


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
            const setProp = (componentsData, prop) => {
                if (componentsData.id === prop.id) {
                    return {
                        ...componentsData,
                        styles: {
                            ...componentsData.styles,
                            common: {
                                ...componentsData.styles.common,
                                [prop.name]: prop.value
                            }
                        }
                    }
                }
                const children = componentsData.childrenList.map(child => {
                    return setProp(child, prop);
                });
                return {
                    ...componentsData,
                    childrenList: children
                }
            }
            return {
                ...state,
                componentsData: setProp(state.componentsData, action.prop)
            }

        case SET_COMPONENT_VALUE:
            const setValue = (componentsData, componentId, value) => {
                if (componentsData.id === componentId) {
                    return {
                        ...componentsData,
                        value
                    }
                }
                const children = componentsData.childrenList.map(child => {
                    return setValue(child, componentId, value);
                });
                return {
                    ...componentsData,
                    childrenList: children
                }
            }
            return {
                ...state,
                componentsData: setValue(state.componentsData, action.id, action.value)
            }


        case SET_COMPONENT_NAME:
            const setName = (componentsData, componentId, name) => {
                if (componentsData.id === componentId) {
                    return {
                        ...componentsData,
                        name
                    }
                }
                const children = componentsData.childrenList.map(child => {
                    return setName(child, componentId, name);
                });
                return {
                    ...componentsData,
                    childrenList: children
                }
            }
            return {
                ...state,
                componentsData: setName(state.componentsData, action.id, action.name)
            }

        case ADD_COMPONENT:
            const {containerId, component} = action;
            return {
                ...state,
                componentsData: addComponentIntoTree(state.componentsData, containerId, component)
            }

        case DELETE_COMPONENT:
            return {
                ...state,
                componentsData: deleteComponent(state.componentsData, action.componentId)
            }

        case SET_DRAGEND_COMPONENT:
            return {
                ...state,
                dragendComponent: action.componentData
            }

        case UNSET_DRAGEND_COMPONENT:
            const newState = {...state};
            delete newState.dragendComponent;
            return {
                ...newState
            }

        default:
            return state
    }
}
