import React, { useEffect, useState } from 'react'
import { screenItems } from './Items';
import { ResolutionsIcon, ResolutionsItem, ResolutionsBody, ResolutionsValue } from './ResolutionsStyled'

import { useDispatch, useSelector } from 'react-redux';
import { setResolution } from '../../../../../../store/actions/document';


const items = screenItems;


export default function Resolutions(props) {

    const currentResolution = useSelector(state => state.document.resolution);
    const dispatch = useDispatch();
    const {activeComponent} = props;
    const resolution = useSelector(state => state.document.resolution);

    useEffect(() => {
        if (!resolution && activeComponent) {
            dispatch(setResolution('screen_mobile'));
        }
    }, [dispatch, resolution, activeComponent]);

    const onItemClick = (e, value) => {
        dispatch(setResolution(value));
    }

    return (
        <>
          <ResolutionsBody>
                {items && items.map(item => {
                    return (
                        <ResolutionsItem 
                            key={item.id} 
                            id={item.id} 
                            isActive={item.id === currentResolution}
                            onClick={(e) => onItemClick(e, item.id)}
                        >
                            <ResolutionsIcon style={item.style}>
                                <item.icon />
                            </ResolutionsIcon>
                            <ResolutionsValue>{item.value}</ResolutionsValue>
                        </ResolutionsItem>
                    );
                })}
            </ResolutionsBody>  
        </>
    )
}
