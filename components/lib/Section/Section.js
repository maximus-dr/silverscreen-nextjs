import React, { useContext } from 'react'
import { SectionWrapper, SectionBody, SectionBackground } from './SectionStyled'
import { OutlinesContext } from '../../../context/outlinesContext';
import { getHandler } from '../../../core/functions/components';
import { useSelector } from 'react-redux';


export default function Section(props) {

    const outlines = useContext(OutlinesContext);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;

    const componentData = isActiveComponent ? activeComponent : props.componentData;

    return (
        <SectionWrapper
            {...props}
            componentData={componentData} 
            showOutlines={outlines} 
            onMouseEnter={props.onMouseEnter} 
            onClick={getHandler(props, 'onClick')}
        >
            <SectionBackground {...props} componentData={componentData}>
                <SectionBody {...props} componentData={componentData}>
                    {props.children}
                </SectionBody>
            </SectionBackground>
        </SectionWrapper>
    )
}
