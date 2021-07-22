import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProp } from '../../../../../../../store/actions/document';
import { InputNumField, InputNumSelect, InputNumUnit, InputNumUnitSingle, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {

    const {units, min, max, parsedProp, isDisabled} = props;

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

    useEffect(() => {
        isDisabled ? setDisabled(true) : setDisabled(false);
    }, [isDisabled]);


    const onInputChange = (e) => {
        const value = e.target.value;
        const unit = propUnit || '';
        dispatch(setProp({
            name: parsedProp.name,
            value: value + unit,
            resolution
        }));
    };


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
    

    const singleUnit = units && units.length === 1;
    const multipleUnits = units && units.length > 1;


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
                {   
                    singleUnit &&
                    <InputNumUnitSingle isDisabled={disabled}>
                        {units[0].name}
                    </InputNumUnitSingle>
                }
                {
                    multipleUnits &&
                    <InputNumSelect 
                        value={propUnit} 
                        onChange={onSelect}
                    >
                        {units.map(unit => (
                            <option value={unit.name} key={unit.id}>
                                {unit.name}
                            </option>
                        ))}
                    </InputNumSelect>
                }
            </InputNumUnit>
        </InputNumWrapper>
    )
}
