import React from 'react'
import { ShowsWrapper } from './ShowsStyled'

export default function Shows(props) {

    const {children} = props;

    return (
        <ShowsWrapper>
            {children}
        </ShowsWrapper>
    )
}
