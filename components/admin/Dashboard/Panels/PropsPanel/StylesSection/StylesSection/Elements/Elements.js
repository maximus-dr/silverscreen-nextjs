import React, { useEffect } from 'react'
import { useState } from 'react';
import { ElementItem, ElementsWrapper } from './ElementsStyled'


// const componentElements = {
//     section: [{name: 'wrapper'}, {name: 'body'}, {name: 'background'}]
// }

// function getElements(component) {
//     return componentElements[component.typeName];
// }


export default function Elements(props) {

    const {activeComponent, activeElement, setActiveElement, elements} = props;
    // const elements = activeComponent ? getElements(activeComponent) : null;
    // const [active, setActive] = useState(() => elements && elements[0].name || null);

    useEffect(() => {
        if (elements) {
            setActiveElement(elements[0].name)
        }
    }, [elements, setActiveElement, activeComponent]);


    const fragmentsItems = elements ? elements.map(item => {
        return (
            <ElementItem key={item.name} isActive={item.name === activeElement} onClick={() => setActiveElement(item.name)}>
                {item.name}
            </ElementItem>
        );
    }) : null;
    
    return (
        <>
           <ElementsWrapper>
                {fragmentsItems}
           </ElementsWrapper>
        </>
    )
}
