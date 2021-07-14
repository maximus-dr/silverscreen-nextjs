import React from 'react'
import { InputNumField, InputNumUnit, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {

    const {unit, units, min, max, step, activeOption} = props;

    const fullWidth = !units && !unit;
    const middleWidth = !units && unit;

    return (
        <InputNumWrapper>
            <InputNumField type="number" min={min} max={max} step={step} fullWidth={fullWidth} middleWidth={middleWidth} />
            <InputNumUnit>
                {unit}
                {units && 
                <select style={{cursor: 'pointer', width: '50px'}}>
                    {units.map(unit => (
                        <option selected={activeOption} key={unit.id}>{unit.name}</option>
                    ))}
                </select>}
            </InputNumUnit>
        </InputNumWrapper>
    )
}
