import React from 'react'
import { getHandler } from '../../../core/functions/components';
import { RadioButton, RadioLabel } from './RadioStyled'


export default function Radio(props) {

    const radioProps = props.componentData.controlled 
        ? {
            checked: props.isActive,
            onChange: getHandler(props, 'onChange')
        }

        : {};

    return (
        <>
            <RadioButton type="radio"
                {...props}
                id={props.componentData.id}
                name={props.componentData.attrs && props.componentData.attrs.name || 'default'} 
                {...radioProps}
            />
            <RadioLabel {...props} htmlFor={props.componentData.id}>Radio</RadioLabel>
        </>
    );
}


