import React, { useEffect, useState } from 'react'
import { screenItems } from './Items';
import { ScreensIcon, ScreensItem, ScreensSectionBody, ScreenValue } from './ScreensSectionStyled'
import { setResolution } from '../../../../../../store/actions/styles';
import { useDispatch, useSelector } from 'react-redux';


const items = screenItems;


export default function ScreensSection() {
    const resolution = useSelector(state => state.styles.resolution);
    const [activeItem, setActiveItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveItem('screens_desktop');
        dispatch(setResolution('screens_desktop'));
    }, [dispatch])

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
