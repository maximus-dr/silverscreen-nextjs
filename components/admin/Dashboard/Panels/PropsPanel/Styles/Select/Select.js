import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProp } from '../../../../../../../store/actions/document';
import { SelectBody, SelectOption } from './SelectStyled'



export default function Select(props) {

    const {options, parsedProp} = props;
    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);


    const onSelect = (e) => {
        dispatch(setProp({
            name: parsedProp.name,
            value: e.currentTarget.value,
            resolution: resolution
        }));
    }


    return (
        <>
            <SelectBody 
                value={parsedProp && parsedProp.value || options[0].name}
                onChange={onSelect}
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
