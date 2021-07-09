import React, { useEffect, useState } from 'react'
import { ComponentData, ComponentElements, ComponentPropItem, ComponentPropKey, ComponentPropValue, ComponentSectionWrapper } from './ComponentSectionStyled'


export default function ComponentSeciton(props) {

    const {activeComponent} = props;
    const entries = Object.entries(activeComponent);


    const [name, setName] = useState(() => activeComponent.name || '');
    const [value, setValue] = useState(() => activeComponent.value || '');

    const onNameFieldChange = (e) => {
        setName(e.target.value);
    }

    const onValueFieldChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        if (activeComponent.name) {
            setName(activeComponent.name);
        }
        return;
    }, [activeComponent]);

    useEffect(() => {
        if (activeComponent.value) {
            setValue(activeComponent.value);
        }
        return;
    }, [activeComponent])

    
    return (
        <ComponentSectionWrapper>
            <ComponentData>
                {entries && entries.map(entrie => {

                    if (entrie[0] === 'childrenList') return;
                    if (entrie[0] === 'styles') return;
                    if (typeof entrie[1] !== 'string') return;

                    if (entrie[0] === 'name') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <input type="text" value={name} onChange={onNameFieldChange} />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'value') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <input type="text" value={value} onChange={onValueFieldChange} />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    return (
                        <ComponentPropItem key={entrie[0]}>
                            <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                            <ComponentPropValue>{entrie[1]}</ComponentPropValue>
                        </ComponentPropItem>
                    );
                })}
            </ComponentData>
        </ComponentSectionWrapper>
    )
}
