import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSettingsProp } from '../../../../../../store/actions/document';
import { Select, SelectLabel, SelectOption, SelectWrapper } from './PropSelectStyled'



export default function PropSelect(props) {

    const {options, name, value} = props;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setSettingsProp({
            id: activeComponent.id,
            name,
            value: e.target.value
        }));
    }

    return (
        <SelectWrapper>
            <Select 
                value={value}
                onChange={onChange}
            >
                {options && options.map(item => (
                    <SelectOption key={item.value} value={item.value}>{item.value}</SelectOption>
                ))}
            </Select>
            <SelectLabel>Направление</SelectLabel>
        </SelectWrapper>
    )
}
