import React, { useState } from 'react'
import { PseudoClassesItem, PseudoClassesBody } from './PseudoClassesStyled'


export default function PseudoClasses(props) {

    const [activeItem, setActiveItem] = useState('state_hover');
    const {isActive} = props;

    const onItemClick = (e) => {
        if (e.target.id === activeItem) {
            setActiveItem(null);
            return;
        }
        setActiveItem(e.target.id);
    }

    return (
        <>
            <PseudoClassesBody isActive={isActive}>
                <PseudoClassesItem id="state_hover" onClick={onItemClick} isActive={activeItem === 'state_hover' && isActive}>:hover</PseudoClassesItem>
                <PseudoClassesItem id="state_active" onClick={onItemClick} isActive={activeItem === 'state_active' && isActive}>:active</PseudoClassesItem>
                <PseudoClassesItem id="state_focus" onClick={onItemClick} isActive={activeItem === 'state_focus' && isActive}>:focus</PseudoClassesItem>
                <PseudoClassesItem id="state_checked" onClick={onItemClick} isActive={activeItem === 'state_checked' && isActive}>:checked</PseudoClassesItem>
            </PseudoClassesBody>
        </>
    )
}
