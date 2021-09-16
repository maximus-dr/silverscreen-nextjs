import { componentActions } from "./component";
import { filterActions } from "./filter";

const MODE = 'admin';







export const actionProvider = (role, handler, mode) => {
    console.log('mode', mode);
    if (!role) return null;

    const actions = {
        filter: {
            onClick: filterActions[mode].onClick,
            checkIsActive: filterActions[MODE].checkIsActive
        },
        component: {
            onClick: componentActions[MODE].onClick,
            onMouseDown: componentActions[MODE].onMouseDown,
            onDragStart: componentActions[MODE].onDragStart,
            onDragEnter: componentActions[MODE].onDragEnter,
            onDragLeave: componentActions[MODE].onDragLeave,
            onDragOver: componentActions[MODE].onDragOver,
            onDragEnd: componentActions[MODE].onDragEnd,
            onDrop: componentActions[MODE].onDrop
        }
    }

    return actions[role][handler]
}
