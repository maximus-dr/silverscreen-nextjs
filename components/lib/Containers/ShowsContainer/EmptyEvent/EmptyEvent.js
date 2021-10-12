import React from 'react'
import { EmptyEventTitle, EmptyEventWrapper } from './EmptyEventStyled'

export default function EmptyEvent() {
    return (
        <EmptyEventWrapper>
            <EmptyEventTitle>
                Не нашли фильм?
            </EmptyEventTitle>
        </EmptyEventWrapper>
    )
}
