import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'


export default function PropsPanel() {

    const activeComponent = useSelector(state => state.document.activeComponent);

    return (
        <>
           <Panel title="Свойства">
               {activeComponent &&
                <div>
                    <div><b>id:</b> {activeComponent.id}</div>
                    <div><b>name:</b> {activeComponent.name}</div>
                </div>
               }
           </Panel> 
        </>
    )
}
