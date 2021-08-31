import React from 'react'
import { useSelector } from 'react-redux';
import Panel from '../Panel/Panel'
import ComponentsGroup from './ComponentsGroup/ComponentsGroup'



export default function PanelComponents() {

    const templates = useSelector(state => state.document.templates);


    return (
        <>
            <Panel title="Компоненты">
                {templates.map(item => {
                    return (
                        <ComponentsGroup
                            key={item.category}
                            category={item.category}
                            templates={item.templates}
                        />
                    );
                })}
            </Panel>
        </>
    )
}
