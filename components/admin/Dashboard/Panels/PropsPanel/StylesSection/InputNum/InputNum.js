import React from 'react'
import { InputNumField, InputNumUnit, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {
    const {unit, units, min, max, step, parsedProp} = props;

    const fullWidth = !units && !unit;
    const middleWidth = !units && unit;
    const inputValue = parsedProp && parsedProp.value || '';
    

    return (
        <InputNumWrapper>
            <InputNumField 
                type="number" 
                min={min} 
                max={max} 
                step={step} 
                fullWidth={fullWidth} 
                middleWidth={middleWidth} 
                value={inputValue}
                onChange={() => {}}
            />
            <InputNumUnit>
                {unit}
                {units && 
                <select style={{cursor: 'pointer', width: '50px'}}>
                    {units.map(unit => (
                        <option selected={parsedProp && parsedProp.unit === unit.name} key={unit.id}>
                            {unit.name}
                        </option>
                    ))}
                </select>}
            </InputNumUnit>
        </InputNumWrapper>
    )
}
