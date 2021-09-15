import React from 'react'
import { FilterComponent } from './FilterStyled'

export default function Filter(props) {

    const {children} = props;

    return (
        <FilterComponent>
            Filter component
            {children}
        </FilterComponent>
    )
}
