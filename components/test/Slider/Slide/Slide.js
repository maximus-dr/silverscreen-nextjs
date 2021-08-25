import React from 'react'
import { SlideImage, SlideMask, SlideText, SlideWrapper } from './SlideStyled'

export default function Slide(props) {

    return (
        <SlideWrapper>
            <SlideImage src={props.src} alt="slide"/>
        </SlideWrapper>
    )
}
