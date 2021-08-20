import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComponent } from '../../../../../../core/functions/components';
import { clearBuffer, setProp } from '../../../../../../store/actions/document';
import { InputNumField, InputNumSelect, InputNumUnit, InputNumUnitSingle, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {

    const {units, min, max, step, parsedProp} = props;

    const activeComponent = useSelector(state => state.document.activeComponent);
    const id = activeComponent && activeComponent.id || '';
    const fullWidth = !units;
    const inputValue = parsedProp && parsedProp.value || '';
    const resolution = useSelector(state => state.document.resolution);
    const buffer = useSelector(state => state.document.buffer);
    const dispatch = useDispatch();
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);


    const [propUnit, setPropUnit] = useState(parsedProp && parsedProp.unit || units && units[0].name);
    const [disabled, setDisabled] = useState(true);


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


    // отключает input, если ед.измерения - auto
    useEffect(() => {
        if (!activeComponent) return;
        propUnit === 'default' || propUnit === 'auto' ? setDisabled(true) : setDisabled(false);
    }, [propUnit, activeComponent]);


    // useEffect(() => {
    //     if (!activeComponent) return;
    //     if (parsedProp && !parsedProp.value && parsedProp.default) {
    //         setPropUnit(parsedProp.default);
    //     }
    // }, [parsedProp, activeComponent]);

    const onInputFocus = () => {
        if (buffer) dispatch(clearBuffer());
    }

    const onInputChange = (e) => {
        const value = e.target.value;
        const unit = propUnit || '';
        if (value === '') {
            dispatch(setProp({
                name: parsedProp.name,
                value: '',
                resolution,
                id: activeComponent.id
            }));
            return;
        }
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
            dispatch(setProp(prop));
        }
        if (unit === 'default') {
            prop.value = '';
            dispatch(setProp(prop));
            setPropUnit('default');
        }
        if (inputValue) dispatch(setProp(prop));
    }


    const singleUnit = units && units.length === 1;
    const multipleUnits = units && units.length > 1;


    return (
        <InputNumWrapper>
            <InputNumField
                type="number"
                min={min}
                max={max}
                step={step || 1}
                fullWidth={fullWidth}
                value={inputValue}
                disabled={disabled}
                onFocus={onInputFocus}
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
