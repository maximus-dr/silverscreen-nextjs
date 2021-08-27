import React from 'react'
import { PropInput, PropLabel, PropWrapper } from './PropNumStyled'


export default function PropNum(prop) {

    const {name, min, max, step} = prop;
    const id = 'slider-num-prop' + name;

    return (
        <PropWrapper>
            <PropInput
                id={id}
                type="number"
                min={min}
                max={max}
                step={step}
            />
            <PropLabel>
                {name}
            </PropLabel>
        </PropWrapper>
    )
}
