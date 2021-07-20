import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProp } from '../../../../../../../store/actions/document';
import { InputNumField, InputNumUnit, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {

    const {unit, units, min, max, step, parsedProp} = props;

    const fullWidth = !units && !unit;
    const middleWidth = !units && unit;
    const inputValue = parsedProp && parsedProp.value || '';
    const resolution = useSelector(state => state.document.resolution);
    const dispatch = useDispatch();

    const [unitValue, setUnitValue] = useState(parsedProp && parsedProp.unit || units && units[0].name);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (parsedProp && parsedProp.unit) {
            setUnitValue(parsedProp.unit);
        }

        if (parsedProp && !parsedProp.unit && units && units[0].name) {
            setUnitValue(units[0].name)
        }
    }, [parsedProp, units]);

    useEffect(() => {
        if (unitValue === 'auto') {
            setDisabled(true);
        }

        if (unitValue !== 'auto') {
            setDisabled(false);
        }
    }, [unitValue]);


    return (
        <InputNumWrapper>
            <InputNumField 
                type="number" 
                min={min} 
                max={max} 
                step={5} 
                fullWidth={fullWidth} 
                middleWidth={middleWidth} 
                value={inputValue}
                disabled={disabled}
                onChange={(e) => {
                    dispatch(setProp({
                        name: parsedProp.name,
                        value: e.target.value + unitValue,
                        resolution: resolution
                    }))
                }}
            />
            <InputNumUnit>
                {unit}
                {units && 
                <select style={{cursor: 'pointer', width: '50px'}} value={unitValue} onChange={(e) => {

                    if (e.currentTarget.value !== 'auto') {
                        dispatch(setProp({
                        name: parsedProp.name,
                        value: inputValue + e.currentTarget.value,
                        resolution: resolution
                        }));
                    }
                    if (e.currentTarget.value === 'auto') {
                        dispatch(setProp({
                        name: parsedProp.name,
                        value: e.currentTarget.value,
                        resolution: resolution
                        }));
                    }
                }}>
                    {units.map(unit => (
                        <option value={unit.name} key={unit.id}>
                            {unit.name}
                        </option>
                    ))}
                </select>}
            </InputNumUnit>
        </InputNumWrapper>
    )
}
