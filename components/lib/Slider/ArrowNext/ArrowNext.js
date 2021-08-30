import React from 'react'
import { ArrowNextStyled } from './ArrowNextStyled'



export default function ArrowNext(props) {

    const {children, disabled, onClick, styles} = props;

    return (
        <ArrowNextStyled
            disabled={disabled}
            onClick={onClick}
            styles={styles}
        >
            {children}
        </ArrowNextStyled>
    )
}