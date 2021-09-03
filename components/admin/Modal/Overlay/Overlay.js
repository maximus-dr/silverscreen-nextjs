import React from 'react'
import { OverlayWrapper } from './OverlayStyled'

export default function Overlay(props) {
    return (
        <OverlayWrapper onMouseDown={(e) => e.stopPropagation()} isOpen={props.isOpen}>
            {props.children}
        </OverlayWrapper>
    )
}
