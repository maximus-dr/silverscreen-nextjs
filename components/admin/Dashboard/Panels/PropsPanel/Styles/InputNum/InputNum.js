import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProp } from '../../../../../../../store/actions/document';
import { InputNumField, InputNumSelect, InputNumUnit, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {

    const {units, min, max, parsedProp} = props;

    const fullWidth = !units;
    const inputValue = parsedProp && parsedProp.value || '';
    const resolution = useSelector(state => state.document.resolution);
    const dispatch = useDispatch();
    const activeComponent = useSelector(state => state.document.activeComponent);

    const [propUnit, setPropUnit] = useState(parsedProp && parsedProp.unit || units && units[0].name);
    const [disabled, setDisabled] = useState(false);
    

    // установка единиц измерений
    useEffect(() => {
        if (!activeComponent || !parsedProp) return;
        if (parsedProp.unit) {
            setPropUnit(parsedProp.unit);
        }

        if (!parsedProp.unit && units && parsedProp.value) {
            setPropUnit(units[0].name)
        }
    }, [parsedProp, units, activeComponent]);


    // disable input, если ед.измерения - auto
    useEffect(() => {
        if (!activeComponent) return;
        propUnit === 'auto' ? setDisabled(true) : setDisabled(false);
    }, [propUnit, activeComponent]);


    const onInputChange = (e) => {
        dispatch(setProp({
            name: parsedProp.name,
            value: e.target.value + propUnit,
            resolution: resolution
        }));
    }


    const onSelect = (e) => {
        const unit = e.currentTarget.value;

        const prop = {
            name: parsedProp.name,
            value: null,
            resolution
        }

        if (unit !== 'auto' && inputValue) {
            prop.value = inputValue + unit;
        }

        if (unit !== 'auto' && !inputValue) {
            prop.value = '';
            setPropUnit(unit);
        }

        if (unit === 'auto') {
            prop.value = unit;
        }

        dispatch(setProp(prop));
    }


    return (
        <InputNumWrapper>
            <InputNumField 
                type="number" 
                min={min} 
                max={max} 
                step={5}
                fullWidth={fullWidth}
                value={inputValue}
                disabled={disabled}
                onChange={onInputChange}
            />
            <InputNumUnit>
                {units && 
                <InputNumSelect 
                    value={propUnit} 
                    onChange={onSelect}
                >
                    {units.map(unit => (
                        <option value={unit.name} key={unit.id}>
                            {unit.name}
                        </option>
                    ))}
                </InputNumSelect>}
            </InputNumUnit>
        </InputNumWrapper>
    )
}
