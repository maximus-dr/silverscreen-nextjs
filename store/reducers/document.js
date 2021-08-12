import { setNameToComponentsData, setValueToComponentsData, deleteComponentFromComponentsData, addComponentToComponentsData } from "../../core/functions/admin/components";
import { setPropToComponentsData } from "../../core/functions/admin/props";
import { SET_RESOLUTION, SET_PROP, SET_COMPONENT_NAME, ADD_COMPONENT, DELETE_COMPONENT, SET_DRAGEND_COMPONENT, UNSET_DRAGEND_COMPONENT, SET_DOCUMENT_COMPONENTS_DATA, SET_ACTIVE_COMPONENT, UNSET_ACTIVE_COMPONENT, SET_COMPONENT_TO_BUFFER } from "../actions/document"
import { SET_COMPONENT_VALUE } from './../actions/document';



export const documentReducer = (state = {}, action) => {

    switch(action.type) {
        case SET_DOCUMENT_COMPONENTS_DATA:
            return {
                ...state,
                componentsData: action.componentsData
            }

        case SET_ACTIVE_COMPONENT:
            return {
                ...state,
                activeComponent: action.activeComponent
            }

        case UNSET_ACTIVE_COMPONENT:
            const noActiveComponentState = {...state};
            delete noActiveComponentState.activeComponent;
            return {
                ...noActiveComponentState
            }

        case SET_RESOLUTION:
            return {
                ...state,
                resolution: action.resolution
            }

        case SET_PROP:
            return {
                ...state,
                componentsData: setPropToComponentsData(state.componentsData, action.prop)
            }

        case SET_COMPONENT_VALUE:
            return {
                ...state,
                componentsData: setValueToComponentsData(state.componentsData, action.id, action.value)
            }


        case SET_COMPONENT_NAME:
            return {
                ...state,
                componentsData: setNameToComponentsData(state.componentsData, action.id, action.name)
            }

        case ADD_COMPONENT:
            const {containerId, component} = action;
            return {
                ...state,
                componentsData: addComponentToComponentsData(state.componentsData, containerId, component)
            }

        case DELETE_COMPONENT:
            return {
                ...state,
                componentsData: deleteComponentFromComponentsData(state.componentsData, action.componentId)
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

        case SET_COMPONENT_TO_BUFFER:
            return {
                ...state,
                buffer: action.component
            }

        default:
            return state
    }
}
