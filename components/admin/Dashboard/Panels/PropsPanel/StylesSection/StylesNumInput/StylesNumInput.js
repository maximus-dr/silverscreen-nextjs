import React from 'react'
import { StylesNumInputField, StylesNumInputUnit, StylesNumInputWrapper } from './StylesNumInputStyled'


export default function StylesNumInput(props) {

    const {unit, units, min, max, step} = props;

    const fullWidth = !units && !unit;
    const middleWidth = !units && unit;

    return (
        <StylesNumInputWrapper>
            <StylesNumInputField type="number" min={min} max={max} step={step} fullWidth={fullWidth} middleWidth={middleWidth} />
            <StylesNumInputUnit>
                {unit}
                {units && 
                <select style={{cursor: 'pointer', width: '50px'}}>
                    {units.map(unit => (
                        <option key={unit.id}>{unit.name}</option>
                    ))}
                </select>}
            </StylesNumInputUnit>
        </StylesNumInputWrapper>
    )
}
