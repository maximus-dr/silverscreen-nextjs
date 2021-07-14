import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearComponentElement, setStyles, setStylesElement } from '../../../../../../../../store/actions/styles';
import { ElementItem, ElementsWrapper } from './ElementsStyled'



export default function Elements(props) {

    const {activeComponent, elements} = props;
    const dispatch = useDispatch();
    const currentElement = useSelector(state => state.styles.element);
    const resolution = useSelector(state => state.styles.resolution);
    const styles = activeComponent && activeComponent.styles || null;


    useEffect(() => {
        if (elements && activeComponent) {
            dispatch(setStylesElement(elements[0].name));
        }

        if (!elements && activeComponent) {
            dispatch(setStylesElement(null));
        }
    }, [dispatch, elements, activeComponent]);


    const fragmentsItems = elements ? elements.map(item => {
        return (
            <ElementItem 
                key={item.name} 
                isActive={item.name === currentElement} 
                onClick={() => dispatch(setStylesElement(item.name))}
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
