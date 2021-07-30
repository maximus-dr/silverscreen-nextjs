import React, { useState } from 'react'
import { DndWrapper, Drag } from './DragNDropStyled'

const state = {
    items: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
};


export default function DragNDrop() {

    const [items, setItems] = useState(state.items);
    const [draggedItem, setDraggedItem] = useState(null);

    const onDragStart = (e, index) => {
        setDraggedItem(items[index]);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    }

    const onDragOver = (index) => {
        const draggedOverItem = items[index];

        if (draggedItem === draggedOverItem) return;

        let newItems = items.filter(item => item !== draggedItem);

        newItems.splice(index, 0, draggedItem);
        setItems(newItems);
    }

    const onDragEnd = () => {
        
    }
    
    return (
        <DndWrapper>
            <h3>List of items</h3>
            <ul>
                {items.map((item, i) => {
                    return (
                        <li key={item} onDragOver={() => onDragOver(i)}>
                            <Drag 
                                draggable 
                                onDragStart={(e) => onDragStart(e, i)}
                            >
                                {item}
                            </Drag>
                        </li>
                    );
                })}
            </ul>
        </DndWrapper>
    )
}
