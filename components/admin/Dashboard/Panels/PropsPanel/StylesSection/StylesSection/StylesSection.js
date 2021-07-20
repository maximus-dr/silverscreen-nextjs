import React from 'react'
import InputNum from '../InputNum/InputNum'
import { Section, Body, Header, Item, ItemKey, ItemValue, Wrapper } from './StylesSectionStyled'
import Select from '../Select/Select'
import InputText from '../InputText/InputText'
import Elements from './Elements/Elements'
import Resolutions from '../../Resolutions/Resolutions'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, {css} from 'styled-components'



const stylesProps = {
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
        units: [{id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'auto'
    },

    right: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'auto'
    },

    bottom: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: '%'}],
        default: 'auto'
    },

    left: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: '%'}],
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

    columnGap: {
        type: 'select',
        options: [{id: 0, name: 'default'}, {id: 1, name: 'normal'}, {id: 2, name: 'custom'}],
        default: 'normal'
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
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    marginRight: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    marginBottom: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    marginLeft: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingTop: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingRight: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingBottom: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
        default: ''
    },

    paddingLeft: {
        type: 'num',
        units: [{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}, {id: 4, name: 'auto'}],
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
        options: [{id: 0, name: 'default'}, {id: 1, name: 'none'}, {id: 2, name: 'auto'}, {id: 3, name: 'text'}, {id: 4, name: 'contain'}, {id: 5, name: 'all'}],
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
        type: 'text',
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
    }

}


function parseStylesProp(styles, propName) {

    if (!styles) return {};
    
    const propData = stylesProps[propName];
    const propValue = styles[propName];

    const result = {
        name: propName
    }
    
    if (!propData) {
        console.log('Такое свойство не найдено');
        return null;
    }

    if (propData.type === 'select') {
        result.value = propValue;
    }

    if (propData.type === 'text') {
        result.value = propValue;
    }

    if (propData.type === 'num' && !propData.units) {

        if (!Number(propValue) && propValue !== '0') return {};
        if (Number(propValue)) {
            result.value = propValue;
            return result;
        }
        if (propValue === '0') {
            result.value = '0';
            return result;
        }
    }

    if (propData.type === 'num' && propData.units) {

        if (propValue === '0') {
            result.value = '0';
            return result;
        }

        propData.units.forEach(unit => {
            if (String(propValue).includes(unit.name) && propValue) {
                result.value = propValue.replace(unit.name, '');
                result.unit = unit.name;
            }
        })
    }

    if (propData.type === 'border' && propValue) {

        if (propValue === 'none') return { custom: false };

        let params = propValue.split(' ');

        if (propValue.indexOf('rgba') > 0) {
            const rgba = propValue.slice(propValue.indexOf('rgba'));
            params[2] = rgba;
        }

        result.custom = true;
        result.borderWidth = params[0];
        result.borderStyle = params[1];
        result.borderColor = params[2];
    }

    if (propData.type === 'textShadow' && propValue) {
        if (propValue === 'none') return {custom: false}

        let params = propValue.split(' ');

        if (propValue.indexOf('rgba') > 0) {
            const rgba = propValue.slice(propValue.indexOf('rgba'));
            params[3] = rgba;
        }

        result.custom = true;
        result.offsetX = params[0];
        result.offsetY = params[1];
        result.blur = params[2];
        result.color = params[3];
    }

    if (propData.type === 'fontFamily' && propValue) {
        const params = propValue.split(',');

        if (params.length === 3) {
            result.primary = params[0].trim();
            result.secondary = params[1].trim();
            result.serif = params[2].trim();
        }
        
        if (params.length === 2) {
            result.primary = params[0].trim();
            result.secondary = null;
            result.serif = params[1].trim();
        }
    }

    if (propData.type === 'backgroundSize' && propValue) {
        if (propValue.includes('px') || propValue.includes('%')) {
            const params = propValue.split(' ');
            const x = params[0];
            const y = params[1];
            const sizeX = {
                value: 
                    x.includes('px') && x.replace('px', '') || 
                    x.includes('%') && x.replace('%', '') || 
                    x === 'auto' && '',
                unit: 
                    x.includes('px') && 'px' || 
                    x.includes('%') && '%' || 
                    x === 'auto' && 'auto'
            };
            const sizeY = {
                value: 
                    y.includes('px') && y.replace('px', '') || 
                    y.includes('%') && y.replace('%', '') || 
                    y === 'auto' && '',
                unit: 
                    y.includes('px') && 'px' || 
                    y.includes('%') && '%' || 
                    y === 'auto' && 'auto'
            }
            result.value = 'unit unit';
            result.sizeX = sizeX;
            result.sizeY = sizeY;

            return result;
        }

        result.value = propValue;
    }

    if (propData.type === 'backgroundPosition' && propValue) {
        if (propValue.includes('px') || propValue.includes('%')) {
            const params = propValue.split(' ');
            const x = params[0];
            const y = params[1];
            const posX = {
                value: 
                    x.includes('px') && x.replace('px', '').trim() ||
                    x.includes('%') && x.replace('%', '').trim() ||
                    x,
                unit:
                    x.includes('px') && 'px' ||
                    x.includes('%') && '%' ||
                    ''
            }
            const posY = {
                value: 
                    y.includes('px') && y.replace('px', '').trim() ||
                    y.includes('%') && y.replace('%', '').trim() ||
                    y,
                unit:
                    y.includes('px') && 'px' ||
                    y.includes('%') && '%' ||
                    ''
            }
            result.posX = posX;
            result.posY = posY;
            return result;
        }
    }

    return result;
}







const componentElements = {
    section: [{name: 'wrapper'}, {name: 'body'}, {name: 'background'}]
}

function getElements(component) {
    return componentElements[component.typeName];
}


const BorderPropsOutput = styled.div`
    display: none;
    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;

export const BorderProps = (props) => {

    const {styles} = props;
    const [prop, setProp] = useState('border');
    const [custom, setCustom] = useState(false);
    const [borderWidth, setBorderWidth] = useState('');
    const [borderStyle, setBorderStyle] = useState('solid');
    const [borderColor, setBorderColor] = useState('');

    useEffect(() => {
        const propsList = {
            border: parseStylesProp(styles, 'border'),
            borderTop: parseStylesProp(styles, 'borderTop'),
            borderRight: parseStylesProp(styles, 'borderRight'),
            borderBottom: parseStylesProp(styles, 'borderBottom'),
            borderLeft: parseStylesProp(styles, 'borderLeft'),
            outline: parseStylesProp(styles, 'outline')
        }

        if (propsList[prop] && propsList[prop].custom) {
            setCustom(true);
            setBorderWidth(propsList[prop].borderWidth.replace('px', ''));
            setBorderStyle(propsList[prop].borderStyle);
            setBorderColor(propsList[prop].borderColor);
        }
        if (propsList[prop] && !propsList[prop].custom) {
            setCustom(false);
            setBorderWidth('');
            setBorderStyle('solid');
            setBorderColor('');
        }
    }, [prop, styles]);

    return (
        <Item style={{alignItems: 'flex-start'}}>
            <ItemKey>
                <select style={{width: '110px'}} value={prop} onChange={(e) => setProp(e.currentTarget.value)}>
                    <option value="border">border</option>
                    <option value="borderTop">borderTop</option>
                    <option value="borderRight">borderRight</option>
                    <option value="borderBottom">borderBottom</option>
                    <option value="borderLeft">borderLeft</option>
                    <option value="outline">outline</option>
                </select>
            </ItemKey>
            <ItemValue>
                <select style={{width: '110px', marginBottom: '5px'}} value={custom ? 'custom' : 'none'} onChange={() => setCustom(prev => !prev)}>
                    <option value="none">none</option>
                    <option value="custom">custom</option>
                </select>

                <BorderPropsOutput isActive={custom}>
                    <InputNum min={0} unit="px" parsedProp={{value: borderWidth}} />
                    <div style={{marginTop: '5px', marginBottom: '5px'}}>
                        <Select options={[{id: 1, name: 'solid'}, {id: 2, name: 'dashed'}, {id: 3, name: 'dotted'}]} parsedProp={{value: borderStyle}} />
                    </div>
                    <div>
                        <InputText parsedProp={{value: borderColor}} />
                    </div>
                </BorderPropsOutput>
            </ItemValue>
        </Item>
    );
}



const TextShadowOutput = styled.div`
    display: none;
    margin-top: 5px;
    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;

export const TextShadow = (props) => {

    const [custom, setCustom] = useState(false);
    const {styles} = props;

    const parsedProp = parseStylesProp(styles, 'textShadow');

    const offsetX = parsedProp && parsedProp.offsetX && parsedProp.offsetX.replace('px', '') || null;
    const offsetY = parsedProp &&  parsedProp.offsetY && parsedProp.offsetY.replace('px', '') || null;
    const blur = parsedProp &&  parsedProp.blur && parsedProp.blur.replace('px', '') || null;
    const color = parsedProp &&  parsedProp.color && parsedProp.color || null;

    useEffect(() => {
        const prop = parseStylesProp(styles, 'textShadow');
        if (prop && prop.custom) {
            setCustom(true);
        }
        if (prop && !prop.custom) {
            setCustom(false);
        }
    }, [styles]);

    return (
        <Item style={{alignItems: 'flex-start'}}>
            <ItemKey>text-shadow:</ItemKey>
            <ItemValue>
                <select value={custom ? 'custom' : 'none'} onChange={() => setCustom(prev => !prev)}>
                    <option value="none">none</option>
                    <option value="custom">custom</option>
                </select>
                <TextShadowOutput isActive={custom}>
                    <div style={{marginBottom: '5px'}}>
                        <InputNum unit='px' parsedProp={{value: offsetX}} />
                    </div>
                    <div style={{marginBottom: '5px'}}>
                        <InputNum unit='px' parsedProp={{value: offsetY}} />
                    </div>
                    <div style={{marginBottom: '5px'}}>
                        <InputNum unit='px' parsedProp={{value: blur}} />
                    </div>
                    <InputText parsedProp={{value: color}} />
                </TextShadowOutput>
            </ItemValue>
        </Item>
    );
}



const BackgroundSizeOutput = styled.div`
    display: none;
    margin-top: 5px;

    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;


export const BackgroundSize = (props) => {
    
    const {styles} = props;
    const parsedProp = parseStylesProp(styles, 'backgroundSize');

    const sizeX = {
        value: parsedProp && parsedProp.sizeX && parsedProp.sizeX.value || '',
        unit: parsedProp && parsedProp.sizeX && parsedProp.sizeX.unit || ''
    }

    const sizeY = {
        value: parsedProp && parsedProp.sizeY && parsedProp.sizeY.value || '',
        unit: parsedProp && parsedProp.sizeY && parsedProp.sizeY.unit || ''
    }

    const [select, setSelect] = useState('default');

    useEffect(() => {
        const prop = parseStylesProp(styles, 'backgroundSize')
        if (prop && prop.value && prop.value) {
            setSelect(prop.value);
        }

        if (!prop || !prop.value) setSelect('default');
    }, [styles]);

    return (
        <Item style={{alignItems: 'flex-start'}}>
            <ItemKey>background-size:</ItemKey>
            <ItemValue>
                <select style={{width: '110px'}} value={select} onChange={(e) => setSelect(e.currentTarget.value)}>
                    <option value="default">default</option>
                    <option value="auto auto">auto auto</option>
                    <option value="cover">cover</option>
                    <option value="contain">contain</option>
                    <option value="unit unit">unit unit</option>
                </select>
                
                <BackgroundSizeOutput isActive={select === 'unit unit'}>
                    <div style={{marginTop: '5px', marginBottom: '5px'}}>
                        <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'auto'}]} parsedProp={sizeX} />
                    </div>
                    <div>
                        <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}, {id: 3, name: 'auto'}]} parsedProp={sizeY} />
                    </div>
                </BackgroundSizeOutput>
            </ItemValue>
        </Item>
    );
}



const BackgroundPositionOutput = styled.div`
    margin-bottom: 5px;
    display: none;

    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;


export const BackgroundPosition = (props) => {

    const [selectX, setSelectX] = useState('unit');
    const [selectY, setSelectY] = useState('unit');

    const {styles} = props;
    const parsedProp = styles && parseStylesProp(styles, 'backgroundPosition') || {};

    return (
        <Item style={{alignItems: 'flex-start', marginTop: '10px', marginBottom: '10px'}}>
            <ItemKey>background-position:</ItemKey>
            <ItemValue>
                <BackgroundPositionOutput isActive={true}>
                    <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} parsedProp={parsedProp && parsedProp.posX} />
                </BackgroundPositionOutput>
                <BackgroundPositionOutput isActive={true}>
                    <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} parsedProp={parsedProp && parsedProp.posY} />
                </BackgroundPositionOutput>
            </ItemValue>
        </Item>
    );
}



export default function StylesSection(props) {

    const {activeComponent} = props;
    const elements = activeComponent ? getElements(activeComponent) : null;
    const currentElement = useSelector(state => state.document.element);
    const [activeElement, setActiveElement] = useState(() => elements && elements[0].name || null);


    const componentElement = useSelector(state => state.document.element && state.document.element || null);
    const resolution = useSelector(state => state.document.resolution && state.document.resolution || null);


    let styles = {};

    if (activeComponent && activeComponent.styles && !elements) {
        styles = activeComponent.styles[resolution]
    }

    if (activeComponent && activeComponent.styles && elements) {
        styles = activeComponent.styles[componentElement] ? activeComponent.styles[componentElement][resolution] : {};
    }


    return (
        <Wrapper isActive={activeComponent}>

            {/* Выбор разрешения */}
            <Resolutions 
                activeComponent={activeComponent}
            />
                
            

            {/* Размеры */}
            <Section>
                <Header>
                    Размеры
                </Header>
                <Body>
                    <Item>
                        <ItemKey>width:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.width.units} parsedProp={parseStylesProp(styles, 'width')} currentElement={currentElement} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>height:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.height.units} parsedProp={parseStylesProp(styles, 'height')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>min-width:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.minWidth.units} parsedProp={parseStylesProp(styles, 'minWidth')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>max-width:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.maxWidth.units} parsedProp={parseStylesProp(styles, 'maxWidth')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>min-height:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.minHeight.units} parsedProp={parseStylesProp(styles, 'minHeight')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>max-height:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.maxHeight.units} parsedProp={parseStylesProp(styles, 'maxHeight')} />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
            
            {/* Внешние отступы */}
            <Section>
                <Header>
                    Внешние отступы
                </Header>
                <Body>
                    <Item>
                        <ItemKey>margin-top:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.marginTop.units} parsedProp={parseStylesProp(styles, 'marginTop')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>margin-right:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.marginRight.units} parsedProp={parseStylesProp(styles, 'marginRight')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>margin-bottom:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.marginBottom.units} parsedProp={parseStylesProp(styles, 'marginBottom')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>margin-left:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.marginLeft.units} parsedProp={parseStylesProp(styles, 'marginLeft')} />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
            
            {/* Внутренние отступы */}
            <Section>
                <Header>
                    Внутренние отступы
                </Header>
                <Body>
                    <Item>
                        <ItemKey>padding-top:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.paddingTop.units} parsedProp={parseStylesProp(styles, 'paddingTop')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>padding-right:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.paddingRight.units} parsedProp={parseStylesProp(styles, 'paddingRight')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>padding-bottom:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.paddingBottom.units} parsedProp={parseStylesProp(styles, 'paddingBottom')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>padding-left:</ItemKey>
                        <ItemValue>
                            <InputNum  units={stylesProps.paddingLeft.units} parsedProp={parseStylesProp(styles, 'paddingLeft')} />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
            




            {/* Позиционирование */}
            <Section>
                <Header>
                    Позиционирование
                </Header>
                <Body>
                    <Item>
                        <ItemKey>position: </ItemKey>
                        <ItemValue>
                            <Select parsedProp={parseStylesProp(styles, 'position')} options={stylesProps.position.options} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>z-index: </ItemKey>
                        <ItemValue>
                            <InputNum parsedProp={parseStylesProp(styles, 'zIndex')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>top: </ItemKey>
                        <ItemValue>
                            <InputNum units={stylesProps.top.units} parsedProp={parseStylesProp(styles, 'top')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>right: </ItemKey>
                        <ItemValue>
                            <InputNum units={stylesProps.right.units} parsedProp={parseStylesProp(styles, 'right')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>bottom: </ItemKey>
                        <ItemValue>
                            <InputNum units={stylesProps.bottom.units} parsedProp={parseStylesProp(styles, 'bottom')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>left: </ItemKey>
                        <ItemValue>
                            <InputNum units={stylesProps.left.units} parsedProp={parseStylesProp(styles, 'left')} />
                        </ItemValue>
                    </Item>
                </Body>
                <Body>
                    <Item>
                        <ItemKey>flex-direction:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.flexDirection.options} parsedProp={parseStylesProp(styles, 'flexDirection')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>justify-content:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.justifyContent.options} parsedProp={parseStylesProp(styles, 'justifyContent')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>flex-wrap:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.flexWrap.options} parsedProp={parseStylesProp(styles, 'flexWrap')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>align-items:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.alignItems.options} parsedProp={parseStylesProp(styles, 'alignItems')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>align-self:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.alignSelf.options} parsedProp={parseStylesProp(styles, 'alignSelf')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>order:</ItemKey>
                        <ItemValue>
                            <InputNum parsedProp={parseStylesProp(styles, 'order')} />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>column-gap:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.columnGap.options} parsedProp={parseStylesProp(styles, 'columnGap')} />
                            <div style={{marginTop: '5px'}}>
                                <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                            </div>
                        </ItemValue>
                    </Item>
                </Body>
            </Section>


            
            {/* Отображение */}
            <Section>
                <Header>
                    Отображение
                </Header>
                <Body>
                    <Item>
                        <ItemKey>display:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.display.options} parsedProp={parseStylesProp(styles, 'display')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>overflow:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.overflow.options} parsedProp={parseStylesProp(styles, 'overflow')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>overflow-x:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.overflowX.options} parsedProp={parseStylesProp(styles, 'overflowX')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>overflow-y:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.overflowY.options} parsedProp={parseStylesProp(styles, 'overflowY')} />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
            

            {/* Границы */}
            <Section>
                <Header>
                    Границы
                </Header>
                <Body>
                    <Item>
                        <ItemKey>border-radius:</ItemKey>
                        <ItemValue>
                            <InputNum min={0} units={stylesProps.borderRadius.units} parsedProp={parseStylesProp(styles, 'borderRadius')} />
                        </ItemValue>
                    </Item>
                    
                    <BorderProps styles={styles} />

                </Body>
            </Section>


            {/* Типографика */}
            <Section>
                <Header>Типографика</Header>
                <Body>
                    <Item>
                        <ItemKey>color:</ItemKey>
                        <ItemValue>
                            <InputText parsedProp={parseStylesProp(styles, 'color')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>font-size:</ItemKey>
                        <ItemValue>
                            <InputNum units={stylesProps.fontSize.units} parsedProp={parseStylesProp(styles, 'fontSize')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>font-weight:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.fontWeight.options} parsedProp={parseStylesProp(styles, 'fontWeight')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>line-height:</ItemKey>
                        <ItemValue>
                            <InputNum units={stylesProps.lineHeight.units} parsedProp={parseStylesProp(styles, 'lineHeight')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>text-align:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.textAlign.options} parsedProp={parseStylesProp(styles, 'textAlign')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>text-transform:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.textTransform.options} parsedProp={parseStylesProp(styles, 'textTransform')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>text-decoration:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.textDecoration.options} parsedProp={parseStylesProp(styles, 'textDecoration')} />
                        </ItemValue>
                    </Item>
                    

                    <TextShadow styles={styles} />

                    <Item>
                        <ItemKey>user-select:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.userSelect.options} parsedProp={parseStylesProp(styles, 'userSelect')} />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>font-family:</ItemKey>
                        <ItemValue>
                            <div style={{marginBottom: '5px'}}>
                                <InputText parsedProp={{value: parseStylesProp(styles, 'fontFamily') && parseStylesProp(styles, 'fontFamily').primary}} />
                            </div>
                            <div style={{marginBottom: '5px'}}>
                                <InputText parsedProp={{value: parseStylesProp(styles, 'fontFamily') && parseStylesProp(styles, 'fontFamily').secondary}} />
                            </div>
                            <Select options={stylesProps.fontFamily.serif.options} parsedProp={{value: parseStylesProp(styles, 'fontFamily') && parseStylesProp(styles, 'fontFamily').serif}} />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
            

            {/* Фон */}
            <Section>
                <Header>Фон</Header>
                <Body>
                    <Item>
                        <ItemKey>background-color:</ItemKey>
                        <ItemValue>
                            <InputText parsedProp={parseStylesProp(styles, 'backgroundColor')} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>background-image:</ItemKey>
                        <ItemValue>
                            <InputText parsedProp={parseStylesProp(styles, 'backgroundImage')} />
                        </ItemValue>
                    </Item>
                    

                    <BackgroundSize styles={styles} />

                    
                    <BackgroundPosition styles={styles} />

                    <Item>
                        <ItemKey>background-repeat:</ItemKey>
                        <ItemValue>
                            <Select options={stylesProps.backgroundRepeat.options} parsedProp={parseStylesProp(styles, 'backgroundRepeat')} />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>

            
            {/* Эффекты */}
            <Section>
                <Header>Эффекты</Header>
                <Body>
                    <Item>
                        <ItemKey>opacity:</ItemKey>
                        <ItemValue>
                            <InputNum />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>box-shadow:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{margin: '5px 0'}}>
                                <InputNum unit='px' />
                            </div>
                            <div>
                                <InputNum unit='px' />
                            </div>
                            <div style={{margin: '5px 0'}}>
                                <InputNum unit='px' />
                            </div>
                            <div>
                                <InputNum unit='px' />
                            </div>
                            <div style={{margin: '5px 0'}}>
                                <InputText />
                            </div>
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>transform:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{margin: '5px 0'}}>
                                <InputText />
                            </div>
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>filter</ItemKey>
                        <ItemValue>
                            <InputText />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>transitions</ItemKey>
                        <ItemValue>
                            <InputText />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
        </Wrapper>
    )
}
