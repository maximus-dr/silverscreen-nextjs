import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { getHandler } from '../../core/functions/components';
import { ImageBody, ImageWrapper } from './ImageStyled'


export default function Image(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <ImageWrapper
            {...props} 
            {...props.componentData}
            showOutlines={outlines}
            onClick={getHandler(props, 'onClick')}
        >
            <ImageBody 
                {...props}
                {...props.componentData}    
            />
            {props.children}
        </ImageWrapper>
    )
}
