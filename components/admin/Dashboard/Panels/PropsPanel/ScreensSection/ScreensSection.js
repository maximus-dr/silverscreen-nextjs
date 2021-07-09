import React, { useState } from 'react'
import { screenItems } from './Items';
import { ScreensIcon, ScreensItem, ScreensSectionBody, ScreenValue } from './ScreensSectionStyled'
import { setResolution } from '../../../../../../store/actions/styles';
import { useDispatch, useSelector } from 'react-redux';


const items = screenItems;


export default function ScreensSection() {
    const resolution = useSelector(state => state.styles.resolution);
    console.log(resolution);
    const [activeItem, setActiveItem] = useState('screens_mobile');
    const dispatch = useDispatch();

    const onItemClick = (e, value) => {
        setActiveItem(e.target.id);
        dispatch(setResolution(value));
    }

    return (
        <>
          <ScreensSectionBody>
                {items && items.map(item => {
                    return (
                        <ScreensItem 
                            key={item.id} 
                            id={item.id} 
                            activeItem={activeItem} 
                            onClick={(e) => onItemClick(e, item.value)}
                        >
                            <ScreensIcon style={item.style}>
                                <item.icon />
                            </ScreensIcon>
                            <ScreenValue>{item.value}</ScreenValue>
                        </ScreensItem>
                    );
                })}
            </ScreensSectionBody>  
        </>
    )
}
