import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProp } from '../../../../../../../store/actions/document';
import { SelectBody, SelectOption } from './SelectStyled'



export default function Select(props) {

    const {options, parsedProp} = props;
    const dispatch = useDispatch();
    const currentElement = useSelector(state => state.document.element);
    const resolution = useSelector(state => state.document.resolution);


    return (
        <>
            <SelectBody 
                value={parsedProp && parsedProp.value || options[0].name} 
                onChange={(e) => {
                    console.log(parsedProp);
                    dispatch(setProp({
                        name: parsedProp.name,
                        hasElements: true,
                        element: currentElement,
                        value: e.currentTarget.value,
                        resolution: resolution
                    }));
                }}
            >
            {options && options.map(option => {
                return (
                    <SelectOption key={option.id} value={option.name}>
                        {option.name}
                    </SelectOption>
                )
            })}
          </SelectBody>  
        </>
    )
}
