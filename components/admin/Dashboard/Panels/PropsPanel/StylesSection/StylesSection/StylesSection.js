import React from 'react'
import InputNum from '../InputNum/InputNum'
import { Section, Body, Header, Item, ItemKey, ItemValue, Wrapper } from './StylesSectionStyled'
import Select from '../Select/Select'
import InputText from '../InputText/InputText'
import Elements from './Elements/Elements'
import Resolutions from '../../Resolutions/Resolutions'
import StatesSection from '../../PseudoClasses/PseudoClasses'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearStyles, setStyles } from '../../../../../../../store/actions/styles'


const componentElements = {
    section: [{name: 'wrapper'}, {name: 'body'}, {name: 'background'}]
}

function getElements(component) {
    return componentElements[component.typeName];
}



export default function StylesSection(props) {

    const {activeComponent} = props;
    const elements = activeComponent ? getElements(activeComponent) : null;
    const [activeElement, setActiveElement] = useState(() => elements && elements[0].name || null);
    const dispatch = useDispatch();

    const componentStyles = useSelector(state => state.document && state.document.activeComponent && state.document.activeComponent.styles || null);
    const componentElement = useSelector(state => state.styles && state.styles.element || null);
    const resolution = useSelector(state => state.styles && state.styles.resolution || null);

    useEffect(() => {
        if (!componentElement && componentStyles && componentStyles[resolution]) {
            dispatch(setStyles(null, resolution, componentStyles[resolution]));
        }

        else if (componentElement && componentStyles && componentStyles[componentElement] && componentStyles[componentElement][resolution]) {
            dispatch(setStyles(componentElement, resolution, componentStyles[componentElement][resolution]));
        }

        else if (componentElement && componentStyles && componentStyles[componentElement] && !componentStyles[componentElement][resolution]) {
            dispatch(setStyles(componentElement, resolution, null));
        }

        else if (componentElement && componentStyles && !componentStyles[componentElement]) {
            dispatch(setStyles(componentElement, resolution, null));
        }

    }, [dispatch, componentStyles, componentElement, resolution]);

    const styles = useSelector(state => state.styles.styles);

    function getWidth(styles) {
        const str = styles.width;
        if (str && str === 'auto') {
            // console.log ('auto');
        }
        if (str && str.includes('px')) {
            // console.log(str.replace('px', ''));
        }
        if (str && str.includes('%')) {
            // console.log(str.replace('%', ''));
        }

        if (str && str.includes('vw')) {
            // console.log(str.replace('vw', ''));
        }
    }
    
    if (styles) {
        getWidth(styles);
    }

    
    return (
        <Wrapper isActive={activeComponent}>
            {/* Позиционирование */}
            <Section>
                <Elements 
                    activeComponent={activeComponent}
                    activeElement={activeElement}
                    setActiveElement={setActiveElement}
                    elements={elements}  
                />


                {/* Выбор разрешения */}
                <Resolutions 
                    activeComponent={activeComponent}
                />
                    
                {/* Выбор состояния - :hover, :active, :focus, :checked */}
                <StatesSection />

                <Header>
                    Позиционирование
                </Header>
                <Body>
                    <Item>
                        <ItemKey>position: </ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'static'}, {id: 2, name: 'relative'}, {id: 3, name: 'absolute'}, {id: 4, name: 'fixed'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>z-index: </ItemKey>
                        <ItemValue>
                            <InputNum />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>top: </ItemKey>
                        <ItemValue>
                            <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>right: </ItemKey>
                        <ItemValue>
                            <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>bottom: </ItemKey>
                        <ItemValue>
                            <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>left: </ItemKey>
                        <ItemValue>
                            <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </ItemValue>
                    </Item>
                </Body>
                <Body>
                    <Item>
                        <ItemKey>flex-direction:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'row'}, {id: 2, name: 'row-reverse'}, {id: 3, name: 'column'}, {id: 4, name: 'column-reverse'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>justify-content:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'flex-start'}, {id: 2, name: 'flex-end'}, {id: 3, name: 'center'}, {id: 4, name: 'space-between'}, {id: 5, name: 'space-around'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>flex-wrap:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'nowrap'}, {id: 2, name: 'wrap'}, {id: 3, name: 'wrap-reverse'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>align-items:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'flex-start'}, {id: 2, name: 'flex-end'}, {id: 3, name: 'center'}, {id: 4, name: 'baseline'}, {id: 5, name: 'stretch'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>align-self:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'auto'}, {id: 2, name: 'flex-start'}, {id: 3, name: 'flex-end'}, {id: 4, name: 'center'}, {id: 5, name: 'baseline'}, {id: 6, name: 'stretch'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>order:</ItemKey>
                        <ItemValue>
                            <InputNum />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>column-gap:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'normal'}, {id: 2, name: 'custom'}]} />
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
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'inline'}, {id: 3, name: 'block'}, {id: 4, name: 'inline-block'}, {id: 5, name: 'flex'}, {id: 6, name: 'grid'}, {id: 7, name: 'table'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>overflow:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>overflow-x:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>overflow-y:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}]} />
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
            
            {/* Размеры */}
            <Section>
                <Header>
                    Размеры
                </Header>
                <Body>
                    <Item>
                        <ItemKey>width:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>height:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>min-width:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>max-width:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>min-height:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>max-height:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}]} />
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
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>margin-right:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>margin-bottom:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>margin-left:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
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
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>padding-right:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>padding-bottom:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>padding-left:</ItemKey>
                        <ItemValue>
                            <InputNum  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
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
                            <InputNum min={0} units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>
                            <Select options={[{id: 1, name: 'border'}, {id: 2, name: 'border-top'}, {id: 3, name: 'border-right'}, {id: 4, name: 'border-bottom'}, {id: 5, name: 'border-left'}, {id: 6, name: 'outline'}]} />
                        </ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{marginTop: '5px', marginBottom: '15px'}}>
                                <InputNum min={0} unit="px" />
                                <div style={{marginTop: '5px', marginBottom: '5px'}}>
                                    <Select options={[{id: 1, name: 'solid'}, {id: 2, name: 'dashed'}, {id: 3, name: 'dotted'}]} />
                                </div>
                                <div>
                                    <InputText />
                                </div>
                            </div>
                        </ItemValue>
                    </Item>
                </Body>
            </Section>
            
            {/* Типографика */}
            <Section>
                <Header>Типографика</Header>
                <Body>
                    <Item>
                        <ItemKey>color:</ItemKey>
                        <ItemValue>
                            <InputText />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>font-size:</ItemKey>
                        <ItemValue>
                            <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: 'rem'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>font-weight:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'normal'}, {id: 2, name: 'medium'}, {id: 3, name: 'bold'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>line-height:</ItemKey>
                        <ItemValue>
                            <InputNum units={[{id: 1, name: '-'}, {id: 2, name: 'px'}, {id: 3, name: 'em'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>text-align:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'left'}, {id: 2, name: 'right'}, {id: 3, name: 'center'}, {id: 4, name: 'justify'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>text-transform:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'capitalize'}, {id: 3, name: 'uppercase'}, {id: 4, name: 'lowercase'}]} />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>text-decoration:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'underline'}]} />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>text-shadow:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{marginTop: '5px'}}>
                                <div style={{marginBottom: '5px'}}>
                                    <InputNum unit='px' />
                                </div>
                                <div style={{marginBottom: '5px'}}>
                                    <InputNum unit='px' />
                                </div>
                                <div style={{marginBottom: '5px'}}>
                                    <InputNum unit='px' />
                                </div>
                                <InputText />
                            </div>
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>content:</ItemKey>
                        <ItemValue>
                            <InputText />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>user-select:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'auto'}, {id: 3, name: 'text'}, {id: 4, name: 'contain'}, {id: 5, name: 'all'}]} />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>font-family:</ItemKey>
                        <ItemValue>
                            <div style={{marginBottom: '5px'}}>
                                <InputText />
                            </div>
                            <div style={{marginBottom: '5px'}}>
                                <InputText />
                            </div>
                            <Select options={[{id: 1, name: 'serif'}, {id: 2, name: 'sans-serif'}, {id: 3, name: 'monospace'}, {id: 4, name: 'cursive'}, {id: 5, name: 'fantasy'}]} />
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
                            <InputText />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>background-image:</ItemKey>
                        <ItemValue>
                            <InputText />
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>background-size:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'auto auto'}, {id: 2, name: 'px px'}, {id: 3, name: '% %'}, {id: 4, name: 'contain'}, {id: 5, name: 'cover'}]} />
                            <div style={{marginTop: '5px', marginBottom: '5px'}}>
                                <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                            </div>
                            <div>
                                <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                            </div>
                        </ItemValue>
                    </Item>
                    <Item style={{alignItems: 'flex-start'}}>
                        <ItemKey>background-position:</ItemKey>
                        <ItemValue>
                            <div style={{marginBottom: '5px'}}>
                                <InputNum unit="%" />
                            </div>
                            <InputNum unit="%" />
                        </ItemValue>
                    </Item>
                    <Item>
                        <ItemKey>background-repeat:</ItemKey>
                        <ItemValue>
                            <Select options={[{id: 1, name: 'repeat'}, {id: 2, name: 'repeat-x'}, {id: 3, name: 'repeat-y'}, {id: 4, name: 'no-repeat'}]} />
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
