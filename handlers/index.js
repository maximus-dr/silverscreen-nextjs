import { adminHandlers } from "./adminHandlers";
import { filterHandlers } from "./filterHandlers";


export const handlers = (role, handler) => {
    const handlers = {
        admin: adminHandlers,
        filter: filterHandlers,
    }
    return handlers[role][handler]
}

export const getHandler = (params, handlerName) => {
    const {mode} = params;
    const role = mode === 'admin' ? 'admin' : params.role;
    if (!role) return;
    const handler = handlers(role, handlerName);
    if (handler) {
        return (e) => handler(e, params);
    }
}

export const getHandlerResult = (params, name) => {
    const {mode} = params;
    const role = mode === 'admin' ? 'admin' : params.role;
    if (!role) return;
    const handler = handlers(role, name, mode);
    if (handler) {
        return handler(null, params);
    }
}
