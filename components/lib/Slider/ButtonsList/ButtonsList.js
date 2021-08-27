import React from 'react'
import { ButtonsListWrapper } from './ButtonsListStyled'


export default function ButtonsList(props) {
    const {children, styles} = props;
    return (
        <ButtonsListWrapper styles={styles}>
            {children}
        </ButtonsListWrapper>
    )
}
