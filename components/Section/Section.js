import React, { useContext } from 'react'
import { SectionWrapper, SectionBody, SectionBackground } from './SectionStyled'
import { OutlinesContext } from '../../context/outlinesContext';
import { getHandler } from '../../core/functions/components';


export default function Section(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <SectionWrapper
            {...props}
            componentData={props.componentData} 
            showOutlines={outlines} 
            onMouseEnter={props.onMouseEnter} 
            onClick={getHandler(props, 'onClick')}
        >
            <SectionBackground {...props} componentData={props.componentData}>
                <SectionBody {...props} componentData={props.componentData}>
                    {props.children}
                </SectionBody>
            </SectionBackground>
        </SectionWrapper>
    )
}
