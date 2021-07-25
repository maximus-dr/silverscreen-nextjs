import React from 'react'
import { SectionWrapper } from './SectionStyled'
import { getHandler } from '../../../core/functions/components';
import { useSelector } from 'react-redux';



export default function Section(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const componentData = useSelector(state => state.document.components[id]);

    return (
        <SectionWrapper
            {...props}
            componentData={componentData} 
            onMouseEnter={props.onMouseEnter} 
            onClick={getHandler(props, 'onClick')}
            isActiveComponent={isActiveComponent}
        >
            {props.children}
        </SectionWrapper>
    )
}
