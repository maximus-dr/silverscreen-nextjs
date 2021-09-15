import React from 'react'
import { FilterComponent } from './FilterStyled'
import { actionProvider } from '../../../actions/index';


export default function Filter(props) {

    const {children} = props;

    return (
        <FilterComponent
            onClick={(e) => actionProvider('filter', 'onClick')()}
        >
            Filter component
            {children}
        </FilterComponent>
    )
}
