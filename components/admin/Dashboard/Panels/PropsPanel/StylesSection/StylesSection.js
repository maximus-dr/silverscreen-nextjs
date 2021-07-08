import React from 'react'
import StylesNumInput from './StylesNumInput/StylesNumInput'
import { StylesBlock, StylesBlockBody, StylesBlockHeader, StylesItem, StylesKey, StylesValue } from './StylesSectionStyled'
import StylesSelect from './StylesSelect/StylesSelect'
import TextInput from './TextInput/TextInput'



export default function StylesSection() {
    return (
        <>
            {/* Позиционирование */}
            <StylesBlock>
                <StylesBlockHeader>
                    Позиционирование
                </StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>position: </StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'static'}, {id: 2, name: 'relative'}, {id: 3, name: 'absolute'}, {id: 4, name: 'fixed'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>z-index: </StylesKey>
                        <StylesValue>
                            <StylesNumInput />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>top: </StylesKey>
                        <StylesValue>
                            <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>right: </StylesKey>
                        <StylesValue>
                            <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>bottom: </StylesKey>
                        <StylesValue>
                            <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>left: </StylesKey>
                        <StylesValue>
                            <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>flex-direction:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'row'}, {id: 2, name: 'row-reverse'}, {id: 3, name: 'column'}, {id: 4, name: 'column-reverse'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>justify-content:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'flex-start'}, {id: 2, name: 'flex-end'}, {id: 3, name: 'center'}, {id: 4, name: 'space-between'}, {id: 5, name: 'space-around'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>flex-wrap:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'nowrap'}, {id: 2, name: 'wrap'}, {id: 3, name: 'wrap-reverse'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>align-items:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'flex-start'}, {id: 2, name: 'flex-end'}, {id: 3, name: 'center'}, {id: 4, name: 'baseline'}, {id: 5, name: 'stretch'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>align-self:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'auto'}, {id: 2, name: 'flex-start'}, {id: 3, name: 'flex-end'}, {id: 4, name: 'center'}, {id: 5, name: 'baseline'}, {id: 6, name: 'stretch'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>order:</StylesKey>
                        <StylesValue>
                            <StylesNumInput />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>column-gap:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'normal'}, {id: 2, name: 'custom'}]} />
                            <div style={{marginTop: '5px'}}>
                                <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                            </div>
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>
            
            {/* Отображение */}
            <StylesBlock>
                <StylesBlockHeader>
                    Отображение
                </StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>display:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'inline'}, {id: 3, name: 'block'}, {id: 4, name: 'inline-block'}, {id: 5, name: 'flex'}, {id: 6, name: 'grid'}, {id: 7, name: 'table'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>overflow:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>overflow-x:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>overflow-y:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'visible'}, {id: 2, name: 'hidden'}, {id: 3, name: 'scroll'}, {id: 4, name: 'auto'}]} />
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>
            
            {/* Размеры */}
            <StylesBlock>
                <StylesBlockHeader>
                    Размеры
                </StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>width:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>height:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>min-width:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>max-width:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vw'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>min-height:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>max-height:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'auto'}, {id: 2, name: 'px'}, {id: 3, name: '%'}, {id: 4, name: 'vh'}]} />
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>
            
            {/* Внешние отступы */}
            <StylesBlock>
                <StylesBlockHeader>
                    Внешние отступы
                </StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>margin-top:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>margin-right:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>margin-bottom:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>margin-left:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>
            
            {/* Внутренние отступы */}
            <StylesBlock>
                <StylesBlockHeader>
                    Внутренние отступы
                </StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>padding-top:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>padding-right:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>padding-bottom:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>padding-left:</StylesKey>
                        <StylesValue>
                            <StylesNumInput  units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>
            
            {/* Границы */}
            <StylesBlock>
                <StylesBlockHeader>
                    Границы
                </StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>border-radius:</StylesKey>
                        <StylesValue>
                            <StylesNumInput min={0} units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>
                            <StylesSelect options={[{id: 1, name: 'border'}, {id: 2, name: 'border-top'}, {id: 3, name: 'border-right'}, {id: 4, name: 'border-bottom'}, {id: 5, name: 'border-left'}, {id: 6, name: 'outline'}]} />
                        </StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{marginTop: '5px', marginBottom: '15px'}}>
                                <StylesNumInput min={0} unit="px" />
                                <div style={{marginTop: '5px', marginBottom: '5px'}}>
                                    <StylesSelect options={[{id: 1, name: 'solid'}, {id: 2, name: 'dashed'}, {id: 3, name: 'dotted'}]} />
                                </div>
                                <div>
                                    <TextInput />
                                </div>
                            </div>
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>
            
            {/* Типографика */}
            <StylesBlock>
                <StylesBlockHeader>Типографика</StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>color:</StylesKey>
                        <StylesValue>
                            <TextInput />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>font-size:</StylesKey>
                        <StylesValue>
                            <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: 'em'}, {id: 3, name: 'rem'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>font-weight:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'normal'}, {id: 2, name: 'medium'}, {id: 3, name: 'bold'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>line-height:</StylesKey>
                        <StylesValue>
                            <StylesNumInput units={[{id: 1, name: '-'}, {id: 2, name: 'px'}, {id: 3, name: 'em'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>text-align:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'left'}, {id: 2, name: 'right'}, {id: 3, name: 'center'}, {id: 4, name: 'justify'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>text-transform:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'capitalize'}, {id: 3, name: 'uppercase'}, {id: 4, name: 'lowercase'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>text-decoration:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'underline'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>text-shadow:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{marginTop: '5px'}}>
                                <div style={{marginBottom: '5px'}}>
                                    <StylesNumInput unit='px' />
                                </div>
                                <div style={{marginBottom: '5px'}}>
                                    <StylesNumInput unit='px' />
                                </div>
                                <div style={{marginBottom: '5px'}}>
                                    <StylesNumInput unit='px' />
                                </div>
                                <TextInput />
                            </div>
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>content:</StylesKey>
                        <StylesValue>
                            <TextInput />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>user-select:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'auto'}, {id: 3, name: 'text'}, {id: 4, name: 'contain'}, {id: 5, name: 'all'}]} />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>font-family:</StylesKey>
                        <StylesValue>
                            <div style={{marginBottom: '5px'}}>
                                <TextInput />
                            </div>
                            <div style={{marginBottom: '5px'}}>
                                <TextInput />
                            </div>
                            <StylesSelect options={[{id: 1, name: 'serif'}, {id: 2, name: 'sans-serif'}, {id: 3, name: 'monospace'}, {id: 4, name: 'cursive'}, {id: 5, name: 'fantasy'}]} />
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>
            
            {/* Фон */}
            <StylesBlock>
                <StylesBlockHeader>Фон</StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>background-color:</StylesKey>
                        <StylesValue>
                            <TextInput />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>background-image:</StylesKey>
                        <StylesValue>
                            <TextInput />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>background-size:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'auto auto'}, {id: 2, name: 'px px'}, {id: 3, name: '% %'}, {id: 4, name: 'contain'}, {id: 5, name: 'cover'}]} />
                            <div style={{marginTop: '5px', marginBottom: '5px'}}>
                                <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                            </div>
                            <div>
                                <StylesNumInput units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} />
                            </div>
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>background-position:</StylesKey>
                        <StylesValue>
                            <div style={{marginBottom: '5px'}}>
                                <StylesNumInput unit="%" />
                            </div>
                            <StylesNumInput unit="%" />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>background-repeat:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'repeat'}, {id: 2, name: 'repeat-x'}, {id: 3, name: 'repeat-y'}, {id: 4, name: 'no-repeat'}]} />
                        </StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>

            {/* Эффекты */}
            <StylesBlock>
                <StylesBlockHeader>Эффекты</StylesBlockHeader>
                <StylesBlockBody>
                    <StylesItem>
                        <StylesKey>opacity:</StylesKey>
                        <StylesValue>
                            <StylesNumInput />
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>box-shadow:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{margin: '5px 0'}}>
                                <StylesNumInput unit='px' />
                            </div>
                            <div>
                                <StylesNumInput unit='px' />
                            </div>
                            <div style={{margin: '5px 0'}}>
                                <StylesNumInput unit='px' />
                            </div>
                            <div>
                                <StylesNumInput unit='px' />
                            </div>
                            <div style={{margin: '5px 0'}}>
                                <TextInput />
                            </div>
                        </StylesValue>
                    </StylesItem>
                    <StylesItem style={{alignItems: 'flex-start'}}>
                        <StylesKey>transform:</StylesKey>
                        <StylesValue>
                            <StylesSelect options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                            <div style={{margin: '5px 0'}}>
                                <TextInput />
                            </div>
                        </StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>filter</StylesKey>
                        <StylesValue></StylesValue>
                    </StylesItem>
                    <StylesItem>
                        <StylesKey>transitions</StylesKey>
                        <StylesValue></StylesValue>
                    </StylesItem>
                </StylesBlockBody>
            </StylesBlock>  
        </>
    )
}
