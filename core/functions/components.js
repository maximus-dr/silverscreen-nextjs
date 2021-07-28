import { nanoid } from "nanoid";

const getRole = (component) => {
    return component.props.componentData.role && component.props.componentData.role || null;
}

const getHandler = (props, action) => {
    return (
        (e) => props.handlers 
        && props.handlers[action] 
        && props.handlers[action](e, props) || null
    );
}

function extractChildrenDataByRole(componentData, role) {
    const result = [];

    function getChild(data) {
    
        if (data.childrenList && data.childrenList.length > 0) {
            data.childrenList.forEach(child => {
                if (child.role === role) {
                    result.push(child);
                }
                if (child.childrenList && child.childrenList.length > 0) {
                    getChild(child);
                }
            });
        } 
        return;
    }
    getChild(componentData);
    return result;
}

function extractChildrenByRole(props, role) {
    const result = [];
    
    function getChild(parent) {
        if (parent.children && parent.children.length > 0) {
            parent.children.forEach(child => {
                if (child && child.props.componentData.role && child.props.componentData.role === role) {
                    result.push(child);
                }
                if (child && child.props.children && child.props.children.length > 0) {
                    getChild(child.props);
                }
            });
            return;
        }
    }

    getChild(props);
    return result.length > 0 ? result : null;
}

function generateNewId(length) {
    return nanoid(length);
}


function addComponentIntoTree(state, containerId, component) {

    if (state.id === containerId) {
        return {
            ...state,
            childrenList: [
                component,
                ...state.childrenList
            ]
        }
    }

    const children = state.childrenList.map((child) => {
        return addComponentIntoTree(child, containerId, component);
    });

    return {
        ...state,
        childrenList: children
    }
}


export {
    getRole,
    getHandler,
    extractChildrenDataByRole,
    extractChildrenByRole,
    generateNewId,
    addComponentIntoTree
}
