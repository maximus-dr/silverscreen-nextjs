import React from 'react'
import { useSelector } from 'react-redux';
import { getHandler } from '../../../core/functions/components';
import { getAttrs } from '../../../core/functions/styles';
import { LabelSpan, LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, InputLabel } from './LabelStyled'



export default function Label(props) {

    const attrs = getAttrs(props.componentData);

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentData = useSelector(state => state.document.components[id]);


    const label = (heading) => {

        const text = componentData.value || '';
        const htmlFor = attrs && componentData.attrs['for'] || '';

        switch(heading) {
            case 'h1':
                return (
                    <LabelH1
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH1>
                );
            case 'h2':
                return (
                    <LabelH2
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH2>
                );
            case 'h3':
                return (
                    <LabelH3 
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH3>
                );
            case 'h4':
                return (
                    <LabelH4
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH4>
                );
            case 'h5':
                return (
                    <LabelH5
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent} 
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH5>
                );
            case 'h6':
                return (
                    <LabelH6
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH6>
                );
            case 'label':
                return (
                    <InputLabel 
                        htmlFor={htmlFor} 
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </InputLabel>
                );
            default:
                return (
                    <LabelSpan 
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        {...props.handlers}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelSpan>
                );
        }
    } 

    return (
        <>
            {label(componentData.heading)}
        </>
    );
}
