import React from 'react'
import { PropsBody, PropsHeader, PropsSection } from './SliderPropsStyled'

export default function SliderProps() {
    return (
        <PropsSection>
            <PropsBody>
                <ul>
                    <li>Swipe</li>
                    <li>Auto Play</li>
                    <li>Infinite Loop</li>
                    <li>Interval</li>
                    <li>Horizontal / Vertical</li>
                    <li>Arrows</li>
                    <li>Controlls</li>
                </ul>
            </PropsBody>
        </PropsSection>
    )
}
