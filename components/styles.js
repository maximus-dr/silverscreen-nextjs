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

        flex-direction: ${styles && styles.flexDirection || ''};
        justify-content: ${styles && styles.justifyContent || ''};
        flex-wrap: ${styles && styles.flexWrap || ''};
        align-items: ${styles && styles.alignItems || ''};
        align-self: ${styles && styles.alignSelf || ''};
        column-gap: ${styles && styles.columnGap || ''};

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

        color: ${styles && styles.color || ''};
        text-align: ${styles && styles.textAlign || ''};
        text-transform: ${styles && styles.textTransform || ''};
        text-decoration: ${styles && styles.textDecoration || ''};
        font-size: ${styles && styles.fontSize || ''};
        font-weight: ${styles && styles.fontWeight || ''};
        font-style: ${styles && styles.fontStyle || ''};
        line-height: ${styles && styles.lineHeight || ''};
        content: ${styles && styles.content || ''};

        background-color: ${styles && styles.backgroundColor || ''};
        background-image: ${styles && styles.backgroundImage || ''};
        background-size: ${styles && styles.backgroundSize || ''};
        background-position: ${styles && styles.backgroundPosition || ''};
        background-repeat: ${styles && styles.backgroundRepeat || ''};
        filter: ${styles && styles.filter || ''};

        opacity: ${styles && styles.opacity || ''};
        transform: ${styles && styles.transform || ''};
        box-shadow: ${styles && styles.boxShadow || ''};

        cursor: ${styles && styles.cursor || ''};
        user-select: ${styles && styles.userSelect || ''};
        pointer-events: ${styles && styles.pointerEvents || ''};
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
