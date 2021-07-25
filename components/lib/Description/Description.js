import React from 'react'
import { DescriptionBody } from './DescriptionStyled'
import { useSelector } from 'react-redux';



export default function Description(props) {

    const id = props.componentData.id;
    const componentData = useSelector(state => state.document.components[id]);
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === id;

    return (
        <DescriptionBody 
            {...props}
            componentData={componentData}
            isActiveComponent={isActiveComponent}
        >
                {componentData.value || null}
            {props.children}
        </DescriptionBody>
    )
}
