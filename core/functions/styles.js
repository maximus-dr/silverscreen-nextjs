function getStyles(props) {
    return props.styles ? props.styles : null;
}

function getHoverStyles(props) {
    return props.styles && props.styles.hover ? props.styles.hover : null;
}

function getActiveStyles(props) {
    return props.styles && props.styles.active ? props.styles.active : null;
}

function getFocusStyles(props) {
    return props.styles && props.styles.focus ? props.styles.focus : null;
}

function getTransitions(props) {
    return props.styles && props.styles.transitions && props.styles.transitions.length ? props.styles.transitions : null;
}

function getAttrs(props) {
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
