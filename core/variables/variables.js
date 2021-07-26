export const screens = {
    screen_mobile: {
        minWidth: '320px'
    },
    screen_mobile_landscape: {
        minWidth: '480px'
    },
    screen_tablet: {
        minWidth: '640px'
    },
    screen_tablet_landscape: {
        minWidth: '1024px'
    },
    screen_desktop: {
        minWidth: '1200px'
    }
};

export const colors = {
    outline_page: '#9e9e9e',
    outline_section: '#4fc3f7',
    outline_image: '#e1bee7',
    outline_label: '#d4e157',
    outline_text: '#ffa726',
    outline_icon: 'red',
    outline_link: '#ffeb3b',
    outline_button: '#bcaaa4',
    outline_input: 'red',
    outline_form: '#0277bd',
    outline_checkbox: '#ff6e40',
    outline_dropdown: '#80cbc4',
    outline_radio: 'red'
}

export const propsList = {
    position: {
        type: 'select',
        options: [{id: 1, name: 'default'}, {id: 2, name: 'relative'}, {id: 3, name: 'absolute'}, {id: 4, name: 'fixed'}],
        default: 'static'
    },
    
    zIndex: {
        type: 'num',
        default: 0
    },

    top: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'auto'
    },

    right: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'auto'
    },

    bottom: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'auto'
    },

    left: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'auto'
    },

    flexDirection: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'row'}, {id: 2, name: 'row-reverse'}, {id: 3, name: 'column'}, {id: 4, name: 'column-reverse'}],
        default: 'row'
    },

    justifyContent: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'flex-start'}, {id: 2, name: 'flex-end'}, {id: 3, name: 'center'}, {id: 4, name: 'space-between'}, {id: 5, name: 'space-around'}],
        default: 'flex-start'
    },

    flexWrap: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'nowrap'}, {id: 2, name: 'wrap'}, {id: 3, name: 'wrap-reverse'}],
        default: 'nowrap'
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
        default: 'flex-start'
    },

    alignSelf: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'auto'}, {id: 2, name: 'flex-start'}, {id: 3, name: 'flex-end'}, {id: 4, name: 'center'}, {id: 5, name: 'baseline'}, {id: 6, name: 'stretch'}],
        default: 'auto'
    },

    order: {
        type: 'num',
        default: '0'
    },

    display: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'none'}, {id: 2, name: 'inline'}, {id: 3, name: 'block'}, {id: 4, name: 'inline-block'}, {id: 5, name: 'flex'}, {id: 6, name: 'grid'}, {id: 7, name: 'table'}],
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

    width: {
        type: 'num',
        units: [{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}],
        default: 'auto'
    },

    height: {
        type: 'num',
        units: [{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}],
        default: 'auto'
    },

    minWidth: {
        type: 'num',
        units: [{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}],
        default: 'auto'
    },

    maxWidth: {
        type: 'num',
        units: [{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}],
        default: 'auto'
    },

    minHeight: {
        type: 'num',
        units: [{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}],
        default: 'auto'
    },

    maxHeight: {
        type: 'num',
        units: [{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}],
        default: 'auto'
    },

    marginTop: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}],
        default: ''
    },

    marginRight: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}],
        default: ''
    },

    marginBottom: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    marginLeft: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingTop: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingRight: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingBottom: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingLeft: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    borderRadius: {
        type: 'num',
        units: [{id: 0, name: 'auto'}, {id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: '0'
    },

    border: {
        type: 'border',
        default: ''
    },

    borderTop: {
        type: 'border',
        default: ''
    },

    borderRight: {
        type: 'border',
        default: ''
    },

    borderBottom: {
        type: 'border',
        default: ''
    },

    borderLeft: {
        type: 'border',
        default: ''
    },

    outline: {
        type: 'border',
        default: ''
    },

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
        options: [{id: 0, name: 'default'}, {id: 1, name: 'normal'}, {id: 2, name: 'medium'}, {id: 3, name: 'bold'}],
        default: ''
    },

    fontStyle: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'normal'}, {id: 2, name: 'italic'}, {id: 3, name: 'oblique'}]
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
    opacity: {
        type: 'num'
    }
}
