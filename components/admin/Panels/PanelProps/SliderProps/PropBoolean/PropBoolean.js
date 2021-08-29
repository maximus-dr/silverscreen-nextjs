import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSettingsProp } from '../../../../../../store/actions/document';
import { PropCheckbox, PropLabel, PropWrapper } from './PropBooleanStyled'



export default function PropBoolean(props) {

    const {name, title, value} = props;
    const id = 'slider-boolean-prop-' + name;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setSettingsProp({
            id: activeComponent.id,
            name,
            value: e.currentTarget.checked
        }));
    }

    return (
        <PropWrapper>
            <PropCheckbox
                id={id}
                type="checkbox"
                checked={value}
                onChange={onChange}
            />
            <PropLabel htmlFor={id}>
                {title}
            </PropLabel>
        </PropWrapper>
    )
}
