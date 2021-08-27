import React from 'react'
import { ArrowPrevStyled } from './ArrowPrevStyled';



export default function ArrowPrev(props) {

    const {children, disabled, onClick, styles} = props;

    return (
        <ArrowPrevStyled
            disabled={disabled}
            onClick={onClick}
            styles={styles}
        >
            {children}
        </ArrowPrevStyled>
    )
}
