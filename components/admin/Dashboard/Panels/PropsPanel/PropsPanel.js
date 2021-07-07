import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'
import { ComponentData, PropItem, PropKey, PropsPanelWrapper, PropsSection, PropsSectionBody, PropsSectionHeader, PropValue, StatesSection, StatesItem, ScreensSection, ScreensItem, ScreenValue, ScreensIcon } from './PropsPanelStyled';


const IconSmartphone = () => {
    return (
            <svg x="0px" y="0px"
            width="25px" height="25px" viewBox="0 0 35 35">
                <g>
                    <path fill="currentColor" d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
                        c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
                        c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
                        c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
                        H8.979V3.749h17.042V30.625z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
    );
}


export function IconTablet() {
    return (
        <svg x="0px" y="0px"
                viewBox="0 0 33.994 33.994">
            <g>
                <path fill="currentColor" d="M27.125,0H6.867C5.59,0,4.562,1.033,4.562,2.309v29.377c0,1.272,1.028,2.308,2.305,2.308h20.258
                    c1.273,0,2.306-1.035,2.306-2.308V2.309C29.433,1.033,28.399,0,27.125,0z M16.997,33.129c-0.758,0-1.371-0.613-1.371-1.37
                    c0-0.758,0.613-1.372,1.371-1.372c0.756,0,1.371,0.614,1.371,1.372C18.368,32.516,17.753,33.129,16.997,33.129z M27.098,29.186
                    H6.896V2.774h20.202V29.186z"/>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>
    )
}


export default function PropsPanel() {

    const activeComponent = useSelector(state => state.document.activeComponent);

    return (
        <>
           <Panel title="Свойства">
                <PropsPanelWrapper>
                    {activeComponent &&
                    <ComponentData>
                        <div><b>id:</b> {activeComponent.id}</div>
                        <div><b>name:</b> {activeComponent.name}</div>
                    </ComponentData>}
                    
                    <ScreensSection>
                        <ScreensItem>
                            <ScreensIcon style={{width: '20px', height: '25px'}}>
                                <IconSmartphone />
                            </ScreensIcon>
                            <ScreenValue>320px</ScreenValue>
                        </ScreensItem>
                        <ScreensItem>
                            <ScreensIcon style={{width: '20px', height: '25px', transform: 'rotate(90deg)'}}>
                                <IconSmartphone />
                            </ScreensIcon>
                            <ScreenValue>480px</ScreenValue>
                        </ScreensItem>
                        <ScreensItem>
                            <ScreensIcon style={{width: '25px', height: '25px'}}>
                                <IconTablet />
                            </ScreensIcon>
                            <ScreenValue>640px</ScreenValue>
                        </ScreensItem>
                        <ScreensItem>
                            <ScreensIcon style={{width: '25px', height: '25px'}}>
                                <IconTablet />
                            </ScreensIcon>
                            <ScreenValue>1024px</ScreenValue>
                        </ScreensItem>
                        <ScreensItem>
                            <IconSmartphone />
                            <ScreenValue>1200px</ScreenValue>
                        </ScreensItem>
                    </ScreensSection>
                

                    <StatesSection>
                        <StatesItem>:hover</StatesItem>
                        <StatesItem>:active</StatesItem>
                        <StatesItem>:focus</StatesItem>
                        <StatesItem>:checked</StatesItem>
                    </StatesSection>

                    <PropsSection>
                        <PropsSectionHeader>
                            Позиционирование
                        </PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>position: </PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>z-index: </PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>top: </PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>right: </PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>bottom: </PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>left: </PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>flex-direction:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>justify-content:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>flex-wrap:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>align-items:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>align-self:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>column-gap:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>order:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                    <PropsSection>
                        <PropsSectionHeader>
                            Отображение
                        </PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>display:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>overflow:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>overflow-x:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>overflow-y:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                    <PropsSection>
                        <PropsSectionHeader>
                            Размеры
                        </PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>width:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>height:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>min-width:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>max-width:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>min-height:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>max-height:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                    <PropsSection>
                        <PropsSectionHeader>
                            Внешние отступы
                        </PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>margin-top:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>margin-right:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>margin-bottom:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>margin-left:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                    <PropsSection>
                        <PropsSectionHeader>
                            Внутренние отступы
                        </PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>padding-top:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>padding-right:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>padding-bottom:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>padding-left:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                    <PropsSection>
                        <PropsSectionHeader>
                            Границы
                        </PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>border:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>border-radius:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>border-top:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>border-right:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>border-bottom:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>border-left:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>outline:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                    <PropsSection>
                        <PropsSectionHeader>Типографика</PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>color:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>font-size:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>font-weight:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>line-height:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>text-align:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>text-transform:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>text-decoration:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>text-shadow:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>content</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>user-select</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>font-family:</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                    <PropsSection>
                        <PropsSectionHeader>Фон</PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>background-color</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>background-image</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>background-size</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>background-position</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>background-repeat</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>


                    <PropsSection>
                        <PropsSectionHeader>Эффекты</PropsSectionHeader>
                        <PropsSectionBody>
                            <PropItem>
                                <PropKey>opacity</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>box-shadow</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>transform</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>filter</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                            <PropItem>
                                <PropKey>transitions</PropKey>
                                <PropValue></PropValue>
                            </PropItem>
                        </PropsSectionBody>
                    </PropsSection>

                </PropsPanelWrapper>
           </Panel> 
        </>
    )
}
