import React from 'react'
import { WrapperBody } from './WrapperStyled'


export default function Wrapper(props) {
    return (
        <WrapperBody>
            {props.children}
        </WrapperBody>
    )
}
