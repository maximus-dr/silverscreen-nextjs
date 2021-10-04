import React, { useEffect, useRef } from 'react'
import { getHandler } from '../../../core/functions/common/components'
import { CheckboxInput, CheckboxLabel, CheckboxValue } from './CheckboxStyled';


export default function Checkbox(props) {


    const ref = useRef(null);

    useEffect(() => {
        if (props.reset) {
            ref.current.checked = false;
        }
    }, [ref, props.reset]);


    return (
            <CheckboxLabel
                showOutlines={outlines}
                htmlFor={props.componentData.id}
                {...props}
                isActive={true}
            >
                <CheckboxInput
                    {...props}
                    ref={ref}
                    type="checkbox"
                    id={props.componentData.id}
                    onClick={getHandler(props, 'onClick')}
                />
                <CheckboxValue>
                    {props.componentData.label && props.componentData.label || null}
                </CheckboxValue>
            </CheckboxLabel>
    )
}
