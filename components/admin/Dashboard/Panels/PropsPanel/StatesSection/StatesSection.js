import React, { useState } from 'react'
import { StatesItem, StatesSectionBody } from './StatesSectionStyled'


export default function StatesSection() {

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
            <StatesSectionBody>
                <StatesItem id="state_hover" onClick={onItemClick} activeItem={activeItem}>:hover</StatesItem>
                <StatesItem id="state_active" onClick={onItemClick} activeItem={activeItem}>:active</StatesItem>
                <StatesItem id="state_focus" onClick={onItemClick} activeItem={activeItem}>:focus</StatesItem>
                <StatesItem id="state_checked" onClick={onItemClick} activeItem={activeItem}>:checked</StatesItem>
            </StatesSectionBody>
        </>
    )
}
