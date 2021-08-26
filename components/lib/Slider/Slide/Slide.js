import React from 'react'
import { SlideOverlay, SlideWrapper } from './SlideStyled';



export default function Slide(props) {

    const {children} = props;

    return (
        <SlideWrapper>
            <SlideOverlay />
            {children}
        </SlideWrapper>
    )
}
