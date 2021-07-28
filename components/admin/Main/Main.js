import React from 'react'
import { MainWrapper } from './MainStyled'


export default function Main(props) {
    return (
        <MainWrapper>
            {props.children}
        </MainWrapper>
    )
}
