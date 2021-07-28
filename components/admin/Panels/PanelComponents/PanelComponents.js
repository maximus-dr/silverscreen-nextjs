import React from 'react'
import Panel from '../Panel/Panel'
import ComponentsGroup from './ComponentsGroup/ComponentsGroup'


const componentsGroups = [
    {
        name: "Страница",
        templates: [
            {
                id: 'p1', 
                name: 'Шаблон страницы',
                component: {
                    typeName: "section",
                    name: "default name",
                    styles: {
                        common: {}
                    },
                    childrenList: []
                }
            }
        ]
    },
    {
        name: "Секция",
        templates: [
            { 
                id: 'sec01', 
                name: 'Шаблон секции',
                component: {
                    typeName: "section",
                    name: "default",
                    styles: {
                        common: {
                            paddingTop: '15px',
                            paddingRight: '15px',
                            paddingBottom: '15px',
                            paddingLeft: '15px',
                            "minHeight": '50px',
                            "border": "1px dashed #42a5f5"
                        }
                    },
                    childrenList: []
                }
            }
        ]
    },
    {
        name: "Заголовок",
        templates: [
            { 
                id: 'lab001', 
                name: 'Шаблон заголовка',
                component: {
                    typeName: "label",
                    name: "default",
                    value: 'Label',
                    styles: {
                        common: {
                            display: 'inline-block',
                            paddingTop: '5px',
                            paddingRight: '5px',
                            paddingBottom: '5px',
                            paddingLeft: '5px',
                            marginTop: '0px',
                            marignBottom: '0px'
                        }
                    },
                    childrenList: []
                }
            }
        ]
    }
];

export default function PanelComponents() {
    return (
        <>
            <Panel title="Компоненты">
                {componentsGroups.map(group => {
                    return (
                        <ComponentsGroup key={group.name} title={group.name} templates={group.templates} />
                    );
                })}
            </Panel>
        </>
    )
}
