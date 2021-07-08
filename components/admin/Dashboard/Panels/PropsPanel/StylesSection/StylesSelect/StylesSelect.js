import React from 'react'
import { StylesSelectBody, StylesSelectOption } from './StylesSelectStyled'



export default function StylesSelect(props) {

    const {options} = props;

    return (
        <>
          <StylesSelectBody>
            {options && options.map(option => {
                return (
                    <StylesSelectOption key={option.id}>
                        {option.name}
                    </StylesSelectOption>
                )
            })}
          </StylesSelectBody>  
        </>
    )
}
