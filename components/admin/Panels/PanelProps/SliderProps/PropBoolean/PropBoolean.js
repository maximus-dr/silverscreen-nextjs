import React from 'react'
import { PropCheckbox, PropLabel, PropWrapper } from './PropBooleanStyled'

export default function PropBoolean(props) {

    const {name} = props;
    const id = 'slider-boolean-prop-' + name;

    return (
        <PropWrapper>
            <PropCheckbox
                id={id}
                type="checkbox"
            />
            <PropLabel htmlFor={id}>
                {name}
            </PropLabel>
        </PropWrapper>
    )
}
