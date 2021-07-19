import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setComponentElement } from '../../../../../../../../store/actions/document';
import { ElementItem, ElementsWrapper } from './ElementsStyled'



export default function Elements(props) {

    const {activeComponent, elements} = props;
    const dispatch = useDispatch();
    const currentElement = useSelector(state => state.document.element);
    const resolution = useSelector(state => state.document.resolution);
    const styles = activeComponent && activeComponent.styles || null;


    useEffect(() => {
        if (elements && activeComponent) {
            dispatch(setComponentElement(elements[0].name));
        }

        if (!elements && activeComponent) {
            dispatch(setComponentElement(null));
        }
    }, [dispatch, elements, activeComponent]);


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
