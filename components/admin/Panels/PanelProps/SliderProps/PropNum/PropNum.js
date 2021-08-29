import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSettingsProp } from '../../../../../../store/actions/document';
import { PropInput, PropLabel, PropWrapper } from './PropNumStyled'


export default function PropNum(prop) {

    const {name, title, min, max, step, value} = prop;
    const id = 'slider-num-prop' + name;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setSettingsProp({
            id: activeComponent.id,
            name,
            value: e.target.value ? parseInt(e.target.value) : 0       
        }));
    }

    return (
        <PropWrapper>
            <PropInput
                id={id}
                type="number"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
            />
            <PropLabel>
                {title}
            </PropLabel>
        </PropWrapper>
    )
}
