import React from 'react'
import { ButtonStyled } from './ButtonStyled'



export default function Button(props) {
    const {children, isSelected, styles} = props;

    return (
        <ButtonStyled
            styles={styles}
            isSelected={isSelected}
            onClick={props.onClick}
        >
            {children}
        </ButtonStyled>
    )
}
