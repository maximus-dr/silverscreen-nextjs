const getStyles = (props) => {
    return props.styles ? props.styles : null;
}

const getHoverStyles = (props) => {
    return props.styles && props.styles.hover ? props.styles.hover : null;
}

const getActiveStyles = (props) => {
    return props.styles && props.styles.active ? props.styles.active : null;
}

const getFocusStyles = (props) => {
    return props.styles && props.styles.focus ? props.styles.focus : null;
}

const getTransitions = (props) => {
    return props.styles && props.styles.transitions && props.styles.transitions.length ? props.styles.transitions : null;
}

const getAttrs = (props) => {
    return props.attrs ? props.attrs : null;
}



export {
    getStyles,
    getHoverStyles,
    getActiveStyles,
    getTransitions,
    getAttrs,
    getFocusStyles
}
