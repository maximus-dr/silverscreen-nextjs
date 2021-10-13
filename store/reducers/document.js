import { setNameToComponentsData, setValueToComponentsData, deleteComponentFromComponentsData, addComponentToComponentsData, setLinkToComponentsData, updateComponentChildrenListData, setUrlToComponentsData, setForToComponentsData, setRoleToComponentsData, setDatalistToComponentsData } from "../../core/functions/admin/components";
import { setPropToComponentsData, setSettingsPropToComponentsData } from "../../core/functions/admin/props";
import { SET_RESOLUTION, SET_PROP, SET_COMPONENT_NAME, ADD_COMPONENT, DELETE_COMPONENT, SET_DRAGEND_COMPONENT, UNSET_DRAGEND_COMPONENT, SET_DOCUMENT_COMPONENTS_DATA, SET_ACTIVE_COMPONENT, UNSET_ACTIVE_COMPONENT, SET_COMPONENT_TO_BUFFER, UPDATE_COMPONENT_CHILDRENLIST, ADD_COMPONENT_TO_ACTIVE, UPDATE_ACTIVE_COMPONENT_CHILDRENLIST, SET_COMPONENT_VALUE_TO_ACTIVE, SET_TEMPLATES, SET_MODAL, CLOSE_MODAL, CLEAR_BUFFER, SET_COMPONENT_LINK, SET_COMPONENT_LINK_TO_ACTIVE, SET_SETTINGS_PROP, SET_PAGE, UNSET_PAGE, SET_MODE, SET_COMPONENT_URL, SET_COMPONENT_FOR, SET_COMPONENT_ROLE, SET_COMPONENT_DATALIST } from "../actions/document"
import { SET_COMPONENT_VALUE } from './../actions/document';


export const documentReducer = (state = {}, action) => {

    switch(action.type) {
        case SET_DOCUMENT_COMPONENTS_DATA:
            return {
                ...state,
                componentsData: action.componentsData
            }

        case SET_TEMPLATES:
            return {
                ...state,
                templates: action.templates
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
                componentsData: setPropToComponentsData(state.componentsData, action.prop),
                activeComponent: {
                    ...state.activeComponent,
                    styles: {
                        ...state.activeComponent.styles,
                        common: {
                            ...state.activeComponent.styles.common,
                            [action.prop.name]: action.prop.value
                        }
                    }
                }
            }

        case SET_SETTINGS_PROP:
            return {
                ...state,
                componentsData: setSettingsPropToComponentsData(state.componentsData, action.prop),
                activeComponent: {
                    ...state.activeComponent,
                    settings: {
                        ...state.activeComponent.settings,
                        [action.prop.name]: action.prop.value
                    }
                }
            }

        case SET_COMPONENT_VALUE:
            return {
                ...state,
                componentsData: setValueToComponentsData(state.componentsData, action.id, action.value)
            }

        case SET_COMPONENT_VALUE_TO_ACTIVE:
            return {
                ...state,
                activeComponent: {
                    ...state.activeComponent,
                    value: action.value
                }
            }

        case SET_COMPONENT_ROLE:
            return {
                ...state,
                componentsData: setRoleToComponentsData(state.componentsData, action.id, action.role),
                activeComponent: {
                    ...state.activeComponent,
                    role: action.role
                }
            }

        case SET_COMPONENT_DATALIST:
            return {
                ...state,
                componentsData: setDatalistToComponentsData(state.componentsData, action.id, action.dataList),
                activeComponent: {
                    ...state.activeComponent,
                    dataList: action.dataList
                }
            }

        case SET_COMPONENT_LINK:
            return {
                ...state,
                componentsData: setLinkToComponentsData(state.componentsData, action.id, action.link)
            }

        case SET_COMPONENT_LINK_TO_ACTIVE:
            return {
                ...state,
                activeComponent: {
                    ...state.activeComponent,
                    link: action.link
                }
            }

        case SET_COMPONENT_NAME:
            return {
                ...state,
                componentsData: setNameToComponentsData(state.componentsData, action.id, action.name)
            }

        case SET_COMPONENT_URL:
            return {
                ...state,
                componentsData: setUrlToComponentsData(state.componentsData, action.id, action.url)
            }

        case SET_COMPONENT_FOR:
            return {
                ...state,
                componentsData: setForToComponentsData(state.componentsData, action.id, action.value)
            }

        case UPDATE_COMPONENT_CHILDRENLIST:
            return {
                ...state,
                componentsData: updateComponentChildrenListData(state.componentsData, action.componentId, action.childrenList)
            }

        case UPDATE_ACTIVE_COMPONENT_CHILDRENLIST:
            return {
                ...state,
                activeComponent: {
                    ...state.activeComponent,
                    childrenList: action.childrenList
                }
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

        case CLEAR_BUFFER:
            const noBuffer = {...state};
            delete noBuffer.buffer;
            return noBuffer;

        case ADD_COMPONENT_TO_ACTIVE:
            return {
                ...state,
                activeComponent: {
                    ...state.activeComponent,
                    childrenList: [
                        ...state.activeComponent.childrenList,
                        action.component
                    ]
                }
            }

        case SET_MODAL:
            return {
                ...state,
                modal: action.modal
            }

        case CLOSE_MODAL:
            const noModalState = {...state};
            delete noModalState.modal;
            return {
                ...noModalState
            }

        case SET_PAGE:
            sessionStorage.setItem('admin_active_page', action.pageId);
            return {
                ...state,
                page: action.pageId
            }

        case UNSET_PAGE:
            const noPage = {...state};
            delete noPage.page;
            return noPage;

        case SET_MODE:
            return {
                ...state,
                mode: action.mode
            }

        default:
            return state
    }
}
