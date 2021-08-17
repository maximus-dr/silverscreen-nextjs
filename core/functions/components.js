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


const extractChildrenDataByRole = (componentData, role) => {
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


const extractChildrenByRole = (props, role) => {
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


const generateNewId = (length) => {
    return nanoid(length);
}


const getParent = (componentsData, componentId) => {
    let result;
    let match = componentsData.childrenList.find(item => item.id === componentId);
    if (match) {
        result = componentsData;
    }
    if (!match) {
        componentsData.childrenList.forEach(child => {
            if (getParent(child, componentId)) {
                result = getParent(child, componentId);
            };
        });
    }
    return result;
}


const getComponent = (componentsData, componentId) => {
    let result;
    if (componentsData.id === componentId) {
        result = componentsData;
    };

    if (componentsData.childrenList) {
        componentsData.childrenList.forEach(child => {
            if (getComponent(child, componentId)) {
                result = getComponent(child, componentId);
            }
        })
    }
    return result;
}


const getChild = (componentData, childId) => {
    if (!componentData) return;
    let result = null;

    componentData.childrenList.forEach(item => {
        if (item.id === childId) {
            result = item;
            return result;
        }

        if (getChild(item, childId)) {
            result = getChild(item, childId);
            return result;
        };
    })
    return result;
}



export {
    getRole,
    getHandler,
    extractChildrenDataByRole,
    extractChildrenByRole,
    generateNewId,
    getParent,
    getComponent,
    getChild
}
