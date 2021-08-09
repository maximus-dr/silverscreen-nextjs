import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComponent } from '../../../../../../core/functions/components';
import { setProp } from '../../../../../../store/actions/document';
import { InputNumField, InputNumSelect, InputNumUnit, InputNumUnitSingle, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {

    const {units, min, max, step, parsedProp, isDisabled} = props;

    const activeComponent = useSelector(state => state.document.activeComponent);
    const id = activeComponent && activeComponent.id || '';
    const fullWidth = !units;
    const inputValue = parsedProp && parsedProp.value || '';
    const resolution = useSelector(state => state.document.resolution);
    const dispatch = useDispatch();
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, activeComponent.id);


    const [propUnit, setPropUnit] = useState(parsedProp && parsedProp.unit || units && units[0].name);
    const [disabled, setDisabled] = useState(false);


    // установка единиц измерений
    useEffect(() => {
        if (!componentData || !parsedProp) return;
        if (parsedProp.unit) {
            setPropUnit(parsedProp.unit);
        }

        if (!parsedProp.unit && units && parsedProp.value) {
            setPropUnit(units[0].name)
        }
    }, [parsedProp, units, componentData]);


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
            resolution,
            id: activeComponent.id
        }));
    };


    const onSelect = (e) => {
        const unit = e.currentTarget.value;

        const prop = {
            name: parsedProp.name,
            value: null,
            resolution,
            id: activeComponent.id
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
                step={step || 5}
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
