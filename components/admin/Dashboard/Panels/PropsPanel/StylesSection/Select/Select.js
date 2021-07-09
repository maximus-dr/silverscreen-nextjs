import React from 'react'
import { SelectBody, SelectOption } from './SelectStyled'



export default function Select(props) {

    const {options} = props;

    return (
        <>
          <SelectBody>
            {options && options.map(option => {
                return (
                    <SelectOption key={option.id}>
                        {option.name}
                    </SelectOption>
                )
            })}
          </SelectBody>  
        </>
    )
}
