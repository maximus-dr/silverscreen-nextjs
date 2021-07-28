import React from 'react'
import { AddFieldCaption, AddFieldWrapper } from './AddStyled'


export default function Add() {
    return (
        <AddFieldWrapper>
            <AddFieldCaption>
                Перетащите компонент сюда...
            </AddFieldCaption>
            <AddFieldCaption>
                Либо нажмите на него один раз, чтобы добавить в дерево
            </AddFieldCaption>
        </AddFieldWrapper>
    )
}
