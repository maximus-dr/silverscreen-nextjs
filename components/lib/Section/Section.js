import React, { useContext } from 'react'
import { SectionWrapper } from './SectionStyled'
import { OutlinesContext } from '../../../context/outlinesContext';
import { getHandler } from '../../../core/functions/components';
import { useSelector } from 'react-redux';


export default function Section(props) {

    const id = props.componentData.id;
    const outlines = useContext(OutlinesContext);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;

    const componentData = useSelector(state => state.document.components[id]);

    return (
        <SectionWrapper
            {...props}
            componentData={componentData} 
            showOutlines={outlines} 
            onMouseEnter={props.onMouseEnter} 
            onClick={getHandler(props, 'onClick')}
            isActiveComponent={isActiveComponent}
        >
            {props.children}
        </SectionWrapper>
    )
}
