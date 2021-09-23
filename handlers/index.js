import { componentActions } from "./component";
import { filterActions } from "./filter";


export const handlersProvider = (role, handler, mode) => {
    if (!role) return null;

    const actions = {
        filter: {
            onClick: filterActions[mode].onClick,
            checkIsActive: filterActions[mode].checkIsActive
        },
        component: {
            onClick: componentActions[mode].onClick,
            onMouseDown: componentActions[mode].onMouseDown,
            onDragStart: componentActions[mode].onDragStart,
            onDragEnter: componentActions[mode].onDragEnter,
            onDragLeave: componentActions[mode].onDragLeave,
            onDragOver: componentActions[mode].onDragOver,
            onDragEnd: componentActions[mode].onDragEnd,
            onDrop: componentActions[mode].onDrop
        }
    }

    return actions[role][handler]
}


export const getHandler = (params, name) => {
    const {mode, role} = params;
    if (mode === 'admin') {
        const handler = handlersProvider('component', name, mode);
        if (handler) {
            return (e) => handlersProvider('component', name, mode)(e, params);
        }
    }
    if (role && mode !== 'admin') {
        const handler = handlersProvider(role, name, mode);
        if (handler) {
            return (e) => handlersProvider(role, name, mode)(e, params);
        }
    }
    return null;
}

export const getHandlerResult = (params, name) => {
    const {mode, role} = params;
    if (mode === 'admin') {
        const handler = handlersProvider('component', name, mode);
        if (handler) {
            return handler(null, params);
        }
    }
    if (role && mode !== 'admin') {
        const handler = handlersProvider(role, name, mode);
        if (handler) {
            return handler(null, params);
        }
    }
    return null;
}
