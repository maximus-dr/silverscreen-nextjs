import React from 'react'
import { PanelBody, PanelHeader, PanelWrapper } from './PanelStyled'


export default function Panel(props) {

    const {title} = props;

    return (
        <PanelWrapper>
            <PanelHeader>{title}</PanelHeader>
            <PanelBody></PanelBody>
        </PanelWrapper>
    )
}
