import React, { useContext } from 'react'
import { OutlinesContext } from '../../context/outlinesContext'
import { LinkBody, LinkWrapper } from './LinkStyled'
import Link from 'next/link';


export default function LinkView(props) {

    const outlines = useContext(OutlinesContext);

    return (
        <LinkWrapper {...props} {...props.componentData} showOutlines={outlines}>
            <Link href='/link'>
                <a>
                    <LinkBody {...props} {...props.componentData}>
                        {props.componentData && props.componentData.value || 'Link'}
                    </LinkBody>
                </a>
            </Link>
            {props.children}
        </LinkWrapper> 
    )
}
