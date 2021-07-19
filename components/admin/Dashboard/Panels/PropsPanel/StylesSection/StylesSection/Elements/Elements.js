import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComponentElement } from '../../../../../../../../store/actions/document';
import { ElementItem, ElementsWrapper } from './ElementsStyled'



export default function Elements(props) {

    const {activeComponent, elements} = props;
    const dispatch = useDispatch();
    const currentElement = useSelector(state => state.document.element);

    const prevActiveComponent = usePrevious(activeComponent);


    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }

    useEffect(() => {
        if (elements && activeComponent && prevActiveComponent && activeComponent.id !== prevActiveComponent.id || elements && activeComponent && !prevActiveComponent) {
            dispatch(setComponentElement(elements[0].name));
        }

        if (!elements && activeComponent) {
            dispatch(setComponentElement(null));
        }
    }, [dispatch, elements, activeComponent, prevActiveComponent]);


    const fragmentsItems = elements ? elements.map(item => {
        return (
            <ElementItem 
                key={item.name} 
                isActive={item.name === currentElement} 
                onClick={() => dispatch(setComponentElement(item.name))}
            >
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
