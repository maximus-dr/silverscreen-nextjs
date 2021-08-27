import React from 'react'
import { Select, SelectLabel, SelectOption, SelectWrapper } from './PropSelectStyled'

export default function PropSelect(props) {

    const {options} = props;

    return (
        <SelectWrapper>
            <Select>
                {options && options.map(item => (
                    <SelectOption key={item.value} value={item.value}>{item.value}</SelectOption>
                ))}
            </Select>
            <SelectLabel>Направление</SelectLabel>
        </SelectWrapper>
    )
}
