
const propsList = {

    // Размеры
    width: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}],
        default: 'default'
    },
    height: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}],
        default: 'default'
    },
    minWidth: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}],
        default: 'default'
    },
    maxWidth: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'vw'}],
        default: ''
    },
    minHeight: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}],
        default: 'default'
    },
    maxHeight: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'vh'}],
        default: ''
    },


    // Внешние отступы
    marginTop: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: 'em'}, {id: 4, name: '%'}],
        default: 'default'
    },
    marginRight: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: 'em'}, {id: 4, name: '%'}],
        default: 'default'
    },
    marginBottom: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: 'em'}, {id: 4, name: '%'}],
        default: 'default'
    },
    marginLeft: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: 'em'}, {id: 4, name: '%'}],
        default: 'default'
    },


    // Внутренние отступы
    paddingTop: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}],
        default: 'default'
    },
    paddingRight: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}],
        default: 'default'
    },
    paddingBottom: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}],
        default: 'default'
    },
    paddingLeft: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}],
        default: 'default'
    },


    // Границы
    border: {
        type: 'border',
        default: 'default'
    },
    borderTop: {
        type: 'border',
        default: 'default'
    },
    borderRight: {
        type: 'border',
        default: 'default'
    },
    borderBottom: {
        type: 'border',
        default: 'default'
    },
    borderLeft: {
        type: 'border',
        default: 'default'
    },
    outline: {
        type: 'border',
        default: 'default'
    },
    borderRadius: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'default'
    },


    // Отображение
    display: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 2, name: 'flex'}, {id: 3, name: 'inline-flex'}, {id: 4, name: 'block'}, {id: 6, name: 'inline-block'}, {id: 5, name: 'inline'}, {id: 7, name: 'grid'}, {id: 8, name: 'none'}],
        default: ''
    },

    overflow: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}],
        default: 'visible'
    },

    overflowX: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}],
        default: 'visible'
    },

    overflowY: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}],
        default: 'visible'
    },


    // Позиционирование
    position: {
        type: 'select',
        options: [{id: 1, name: 'default'}, {id: 2, name: 'relative'}, {id: 3, name: 'absolute'}, {id: 4, name: 'fixed'}],
        default: 'static'
    },

    zIndex: {
        type: 'num',
        default: ''
    },

    top: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'auto'}],
        default: 'default'
    },

    right: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'auto'}],
        default: 'default'
    },

    bottom: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'auto'}],
        default: 'default'
    },

    left: {
        type: 'num',
        units: [{id: 0, name: 'default'}, {id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'auto'}],
        default: 'default'
    },

    flexDirection: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'row'}, {id: 2, name: 'row-reverse'}, {id: 3, name: 'column'}, {id: 4, name: 'column-reverse'}],
        default: 'default'
    },

    justifyContent: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'flex-start'}, {id: 2, name: 'flex-end'}, {id: 3, name: 'center'}, {id: 4, name: 'space-between'}, {id: 5, name: 'space-around'}],
        default: 'default'
    },

    flexWrap: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'nowrap'}, {id: 2, name: 'wrap'}, {id: 3, name: 'wrap-reverse'}],
        default: 'default'
    },

    flexShrink: {
        type: 'num'
    },

    flexGrow: {
        type: 'num'
    },

    flexBasis: {
        type: 'num',
        units: [{id: 1, name: 'px'}]
    },

    alignItems: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'flex-start'}, {id: 2, name: 'flex-end'}, {id: 3, name: 'center'}, {id: 4, name: 'baseline'}, {id: 5, name: 'stretch'}],
        default: 'default'
    },

    alignSelf: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'flex-start'}, {id: 3, name: 'flex-end'}, {id: 4, name: 'center'}, {id: 5, name: 'baseline'}, {id: 6, name: 'stretch'}],
        default: 'default'
    },

    order: {
        type: 'num',
        default: '0'
    },


    // Шрифт
    color: {
        type: 'text',
        default: ''
    },

    fontSize: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: 'rem'}],
        default: ''
    },

    fontWeight: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'normal'}, {id: 3, name: 'bold'}],
        default: ''
    },

    fontStyle: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'normal'}, {id: 2, name: 'italic'}]
    },

    lineHeight: {
        type: 'num',
        units: [{id: 1, name: ''}, {id: 2, name: 'px'}, {id: 3, name: 'em'}],
        default: ''
    },

    textAlign: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'left'}, {id: 2, name: 'center'}, {id: 3, name: 'right'}, {id: 4, name: 'justify'}],
        default: ''
    },

    textIndent: {
        type: 'num',
        units: [{id: 1, name: 'px'}]
    },

    textTransform: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'none'}, {id: 2, name: 'capitalize'}, {id: 3, name: 'uppercase'}, {id: 4, name: 'lowercase'}],
        default: 'none'
    },

    textDecoration: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'none'}, {id: 2, name: 'underline'}],
        default: 'none'
    },

    textShadow: {
        type: 'textShadow',
        default: 'none'
    },

    content: {
        type: 'text'
    },

    userSelect: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'none'}, {id: 2, name: 'auto'}, {id: 3, name: 'text'}, {id: 5, name: 'all'}],
        default: 'auto'
    },

    fontFamily: {
        type: 'fontFamily',
        serif: {
            options: [{id: 0, name: 'default'}, {id: 1, name: 'serif'}, {id: 2, name: 'sans-serif'}, {id: 3, name: 'monospace'}, {id: 4, name: 'cursive'}, {id: 5, name: 'fantasy'}]
        },
        default: ''
    },


    // Фон
    backgroundColor: {
        type: 'text',
        default: ''
    },

    backgroundImage: {
        type: 'backgroundImage',
        default: ''
    },

    backgroundSize: {
        type: 'backgroundSize',
        default: ''
    },

    backgroundPosition: {
        type: 'backgroundPosition',
        default: ''
    },

    backgroundRepeat: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'repeat'}, {id: 2, name: 'repeat-x'}, {id: 3, name: 'repeat-y'}, {id: 4, name: 'no-repeat'}],
        default: ''
    },


    // Эффекты
    opacity: {
        type: 'num'
    }
}


export {
    propsList
}
