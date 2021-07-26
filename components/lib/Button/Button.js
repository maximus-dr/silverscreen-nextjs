import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { getHandler } from '../../../core/functions/components';
import { ButtonBody } from './ButtonStyled'


export default function Button(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentData = useSelector(state => state.document.components[id]);


    return (
        <ButtonBody
            {...props}
            componentData={componentData}
            onClick={getHandler(props, 'onClick')}
            type={props.componentData.type}
            isActiveComponent={isActiveComponent}
        >
            {componentData && componentData.value || ''}
            {props.children}
        </ButtonBody>
    )
}
