import React from 'react'
import { getHandler } from '../../../core/functions/common/components';
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
            <RadioLabel {...props} htmlFor={props.componentData.id}>
                <RadioButton type="radio"
                    {...props}
                    id={props.componentData.id}
                    name={props.componentData.attrs && props.componentData.attrs.name || 'default'}
                    {...radioProps}
                />
                {props.componentData.value || 'Radio'}
            </RadioLabel>
        </>
    );
}


