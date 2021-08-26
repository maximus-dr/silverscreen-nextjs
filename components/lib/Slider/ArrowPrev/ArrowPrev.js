import React from 'react'
import { ArrowPrevStyled } from './ArrowPrevStyled';

export default function ArrowPrev(props) {

    const {children, disabled, onClick} = props;

    return (
        <ArrowPrevStyled
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </ArrowPrevStyled>
    )
}
