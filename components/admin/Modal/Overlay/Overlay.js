import React from 'react'
import { OverlayWrapper } from './OverlayStyled'

export default function Overlay(props) {
    return (
        <OverlayWrapper isOpen={props.isOpen}>
            {props.children}
        </OverlayWrapper>
    )
}
