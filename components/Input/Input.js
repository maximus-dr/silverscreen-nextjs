import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext';
import { getAttrs } from '../../core/functions/styles';
import { InputBody, InputLabel, InputWrapper } from './InputStyled';


export default function Input(props) {

    const outlines = useContext(OutlinesContext);
    const attrs = getAttrs(props.componentData);

    // добавляет опциональные аттрибуты для компонента
    const inputAttrs = attrs || {};
    const labelAttrs = props.componentData.label && props.componentData.label.attrs || {};


    return (
        <InputWrapper 
            {...props}
            showOutlines={outlines} 
        >
            <InputBody
                {...inputAttrs}
                id={attrs && attrs.id || props.componentData.id}
                type={attrs && attrs.type || 'text'}
                name={attrs && attrs.name || 'name'}
                componentData={props.componentData}
            />
            <InputLabel 
                {...labelAttrs} 
                {...props}
                htmlFor={props.componentData.id && props.componentData.id}
            >
                {props.componentData.value || 'Label'}
            </InputLabel>
            {props.children}
        </InputWrapper>
    )
}
