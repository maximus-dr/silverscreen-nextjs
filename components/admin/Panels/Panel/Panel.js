import React from 'react'
import { PanelBody, PanelBodyWrapper, PanelHeader, PanelTitle, PanelWrapper } from './PanelStyled'


export default function Panel(props) {

    const {title, children} = props;

    return (
        <PanelWrapper>
            <PanelHeader>
                <PanelTitle>{title}</PanelTitle>
            </PanelHeader>
            <PanelBodyWrapper>
                <PanelBody>
                    {children}
                </PanelBody>
            </PanelBodyWrapper>
        </PanelWrapper>
    )
}
