export const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
export const UNSET_ACTIVE_COMPONENT = 'UNSET_ACTIVE_COMPONENT';

export const setActiveComponent = (activeComponent) => ({
    type: SET_ACTIVE_COMPONENT,
    activeComponent
});

export const unsetActiveComponent = () => ({
    type: UNSET_ACTIVE_COMPONENT
});
