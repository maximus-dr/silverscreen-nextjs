import React, { useContext } from 'react'
import { OutlinesContext } from '../../../context/outlinesContext'
import { getHandler } from '../../../core/functions/components';
import { IconBody } from './IconStyled';

export default function Icon(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <IconBody
            {...props} 
            {...props.componentData} 
            showOutlines={outlines}
            onClick={getHandler(props, 'onClick')}
        >
            {props.children}
        </IconBody>
    )
}
