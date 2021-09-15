import { componentActions } from "./component";
import { filterActions } from "./filter";

const MODE = 'admin';


const actions = {
    filter: {
        onClick: filterActions[MODE].onClick
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




export const actionProvider = (role, handler) => {
    return actions[role][handler]
}
