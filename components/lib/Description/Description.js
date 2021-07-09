import React, { useContext } from 'react'
import { OutlinesContext } from '../../../context/outlinesContext';
import { DescriptionBody } from './DescriptionStyled'

export default function Description(props) {

    const outlines = useContext(OutlinesContext);
    const componentData = props.componentData ? props.componentData : null;
    const content = componentData.value || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

    return (
        <DescriptionBody {...props} showOutlines={outlines}>
            {content}
            {props.children}
        </DescriptionBody>
    )
}
