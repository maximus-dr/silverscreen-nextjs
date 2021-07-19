import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProp } from '../../../../../../../store/actions/document';
import { InputNumField, InputNumUnit, InputNumWrapper } from './InputNumStyled'


export default function InputNum(props) {

    const {unit, units, min, max, step, parsedProp, currentElement} = props;

    const fullWidth = !units && !unit;
    const middleWidth = !units && unit;
    const inputValue = parsedProp && parsedProp.value || '';
    const resolution = useSelector(state => state.document.resolution);
    
    const dispatch = useDispatch();
    


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
                onChange={(e) => {
                    dispatch(setProp({
                        name: parsedProp.name,
                        hasElements: true,
                        element: currentElement,
                        name: 'width',
                        value: e.target.value + 'px',
                        resolution: resolution
                    }))
                }}
            />
            <InputNumUnit>
                {unit}
                {units && 
                <select style={{cursor: 'pointer', width: '50px'}} value={parsedProp && parsedProp.unit || units[0].name} onChange={() => {}}>
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
