import React from 'react'
import { ComponentData } from './ComponentSectionStyled'


export default function ComponentSeciton(props) {

    const {activeComponent} = props;

    return (
        <>
            <ComponentData>
                <div><b>id:</b> {activeComponent && activeComponent.id}</div>
                <div><b>name:</b> {activeComponent && activeComponent.name}</div>
            </ComponentData>
        </>
    )
}
