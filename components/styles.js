import {css} from 'styled-components';


export const StylesProvider = (styles) => {

    return css`
        position: ${styles && styles.position || ''};
        top: ${styles && styles.top || ''};
        right: ${styles && styles.right || ''};
        bottom: ${styles && styles.bottom || ''};
        left: ${styles && styles.left || ''};
        z-index: ${styles && styles.zIndex || ''};

        display: ${styles && styles.display || ''};
        overflow: ${styles && styles.overflow || ''};
        overflow-x: ${styles && styles.overflowX || ''};
        overflow-y: ${styles && styles.overflowY || ''};
        cursor: ${styles && styles.cursor || ''};
        pointer-events: ${styles && styles.pointerEvents || ''};

        flex-direction: ${styles && styles.flexDirection || ''};
        justify-content: ${styles && styles.justifyContent || ''};
        flex-wrap: ${styles && styles.flexWrap || ''};
        align-items: ${styles && styles.alignItems || ''};
        align-self: ${styles && styles.alignSelf || ''};
        column-gap: ${styles && styles.columnGap || ''};
        flex-grow: ${styles && styles.flexGrow || ''};
        flex-shrink: ${styles && styles.flexShrink || ''};
        flex-basis: ${styles && styles.flexBasis || ''};
        order: ${styles && styles.order || ''};

        width: ${styles && styles.width || ''};
        height: ${styles && styles.height || ''};
        min-width: ${styles && styles.minWidth || ''};
        max-width: ${styles && styles.maxWidth || ''};
        min-height: ${styles && styles.minHeight || ''};
        max-height: ${styles && styles.maxHeight || ''};

        margin-top: ${styles && styles.marginTop || ''};
        margin-right: ${styles && styles.marginRight || ''};
        margin-bottom: ${styles && styles.marginBottom || ''};
        margin-left: ${styles && styles.marginLeft || ''};

        padding-top: ${styles && styles.paddingTop || ''};
        padding-right: ${styles && styles.paddingRight || ''};
        padding-bottom: ${styles && styles.paddingBottom || ''};
        padding-left: ${styles && styles.paddingLeft || ''};

        outline: ${styles && styles.outline || ''};
        border: ${styles && styles.border || ''};
        border-top: ${styles && styles.borderTop || ''};
        border-right: ${styles && styles.borderRight || ''};
        border-bottom: ${styles && styles.borderBottom || ''};
        border-left: ${styles && styles.borderLeft || ''};
        border-radius: ${styles && styles.borderRadius || ''};
        border-color: ${styles && styles.borderColor || ''};

        color: ${styles && styles.color || ''};
        text-align: ${styles && styles.textAlign || ''};
        text-indent: ${styles && styles.textIndent || ''};
        text-transform: ${styles && styles.textTransform || ''};
        text-decoration: ${styles && styles.textDecoration || ''};
        text-shadow: ${styles && styles.textShadow || ''};
        font-size: ${styles && styles.fontSize || ''};
        font-weight: ${styles && styles.fontWeight || ''};
        font-style: ${styles && styles.fontStyle || ''};
        font-family: ${styles && styles.fontFamily || ''};
        line-height: ${styles && styles.lineHeight || ''};
        content: ${styles && styles.content || ''};
        user-select: ${styles && styles.userSelect || ''};

        background-color: ${styles && styles.backgroundColor || ''};
        background-image: ${styles && styles.backgroundImage || ''};
        background-size: ${styles && styles.backgroundSize || ''};
        background-position: ${styles && styles.backgroundPosition || ''};
        background-repeat: ${styles && styles.backgroundRepeat || ''};

        opacity: ${styles && styles.opacity || ''};
        box-shadow: ${styles && styles.boxShadow || ''};
        transform: ${styles && styles.transform || ''};
        filter: ${styles && styles.filter || ''};
        transition: ${styles && styles.transitions && styles.transitions.join(', ') || ''};

        &:hover {
            ${styles && styles.hover && StylesProvider(styles.hover)}
        }

        &:active {
            ${styles && styles.active && StylesProvider(styles.active)}
        }

        &:focus {
            ${styles && styles.focus && StylesProvider(styles.focus)}
        }

        &:checked {
            ${styles && styles.checked && StylesProvider(styles.checked)}
        }

        &:before {
            ${styles && styles.before && StylesProvider(styles.before)}
        }

        &:after {
            ${styles && styles.after && StylesProvider(styles.after)}
        }

        ${'' /* isActive */}
        ${props => {

            return props.isActive && css`
                ${styles && styles.isActive && StylesProvider(styles.isActive)}

                &:hover {
                    ${styles && styles.isActive && styles.isActive.hover && StylesProvider(styles.isActive.hover)}
                }

                &:active {
                    ${styles && styles.isActive && styles.isActive.active && StylesProvider(styles.isActive.active)}
                }

                &:focus {
                    ${styles && styles.isActive && styles.isActive.focus && StylesProvider(styles.isActive.focus)}
                }

                &:checked {
                    ${styles && styles.isActive && styles.isActive.checked && StylesProvider(styles.isActive.checked)}
                }

                &:before {
                    ${styles && styles.isActive && styles.isActive.before && StylesProvider(styles.isActive.before)}
                }

                &:after {
                    ${styles && styles.isActive && styles.isActive.after && StylesProvider(styles.isActive.after)}
                }
            `;
        }}
    `;
}
