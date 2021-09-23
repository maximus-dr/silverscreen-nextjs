import React from 'react'
import { FilterComponent } from './FilterStyled'
import { getHandler } from '../../../handlers/index';
import { getComponent } from '../../../core/functions/common/components';
import { useDispatch } from 'react-redux';


export default function Filter(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const {role} = componentData;
    const {children} = props;
    const dispatch = useDispatch();

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        mode,
        role
    }

    return (
        <FilterComponent
            id={id}
            componentData={componentData}
            onClick={getHandler(params, 'onClick')}
        >
            <div style={{width: '100%', padding: '15px'}}>Filter component</div>
            {children}
        </FilterComponent>
    )
}
