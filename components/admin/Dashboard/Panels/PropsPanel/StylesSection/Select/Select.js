import React from 'react'
import { SelectBody, SelectOption } from './SelectStyled'



export default function Select(props) {

    const {options, parsedProp} = props;

    return (
        <>
          <SelectBody>
            {options && options.map(option => {
                return (
                    <SelectOption key={option.id} selected={parsedProp && parsedProp.value === option.name}>
                        {option.name}
                    </SelectOption>
                )
            })}
          </SelectBody>  
        </>
    )
}
