import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'
import ComponentSeciton from './ComponentSection/ComponentSeciton';
import { PropItem, PropKey, PropsPanelWrapper, PropsSection, PropsSectionBody, PropsSectionHeader, PropValue } from './PropsPanelStyled';
import ScreensSection from './ScreensSection/ScreensSection';
import StatesSection from './StatesSection/StatesSection';


export default function PropsPanel() {

    const activeComponent = useSelector(state => state.document.activeComponent);

    return (
        <>
           <Panel title="Свойства">
                <PropsPanelWrapper>
                    {
                        activeComponent &&
                        <ComponentSeciton activeComponent={activeComponent} />
                    }
                    
                    {/* Секция выбора разрешения экрана */}
                    <ScreensSection />
                    
                    {/* Секция выбора состояния - :hover, :active, :focus, :checked */}
                    <StatesSection />
                    
                    {/* Позиционирование */}
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
                    
                    {/* Отображение */}
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
                    
                    {/* Размеры */}
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
                    
                    {/* Внешние отступы */}
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
                    
                    {/* Внутренние отступы */}
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
                    
                    {/* Границы */}
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
                    
                    {/* Типографика */}
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
                    
                    {/* Фон */}
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

                    {/* Эффекты */}
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
