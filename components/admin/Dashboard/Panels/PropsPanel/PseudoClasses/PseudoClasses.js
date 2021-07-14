import React, { useState } from 'react'
import { PseudoClassesItem, PseudoClassesBody } from './PseudoClassesStyled'


export default function PseudoClasses() {

    const [activeItem, setActiveItem] = useState(null);

    const onItemClick = (e) => {
        if (e.target.id === activeItem) {
            setActiveItem(null);
            return;
        }
        setActiveItem(e.target.id);
    }

    return (
        <>
            <PseudoClassesBody>
                <PseudoClassesItem id="state_hover" onClick={onItemClick} activeItem={activeItem}>:hover</PseudoClassesItem>
                <PseudoClassesItem id="state_active" onClick={onItemClick} activeItem={activeItem}>:active</PseudoClassesItem>
                <PseudoClassesItem id="state_focus" onClick={onItemClick} activeItem={activeItem}>:focus</PseudoClassesItem>
                <PseudoClassesItem id="state_checked" onClick={onItemClick} activeItem={activeItem}>:checked</PseudoClassesItem>
            </PseudoClassesBody>
        </>
    )
}
