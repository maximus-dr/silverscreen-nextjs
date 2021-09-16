import React from 'react'
import { FilterComponent } from './FilterStyled'
import { actionProvider } from '../../../actions/index';
import { getComponent } from '../../../core/functions/common/components';


export default function Filter(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const {children} = props;

    return (
        <FilterComponent
            id={id}
            componentData={componentData}
            onClick={(e) => actionProvider('filter', 'onClick')()}
        >
            <div style={{width: '100%', padding: '15px'}}>Filter component</div>
            {children}
        </FilterComponent>
    )
}
