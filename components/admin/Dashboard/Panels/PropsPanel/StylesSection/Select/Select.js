import React from 'react'
import { SelectBody, SelectOption } from './SelectStyled'



export default function Select(props) {

    const {options, parsedProp} = props;

    return (
        <>
          <SelectBody value={parsedProp && parsedProp.value || options[0].name} onChange={() => {}}>
            {options && options.map(option => {
                return (
                    <SelectOption key={option.id} value={option.name}>
                        {option.name}
                    </SelectOption>
                )
            })}
          </SelectBody>  
        </>
    )
}
