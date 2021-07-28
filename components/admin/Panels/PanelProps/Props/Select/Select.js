import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProp } from '../../../../../../store/actions/document';
import { SelectBody, SelectOption } from './SelectStyled'



export default function Select(props) {

    const {options, parsedProp, isDisabled} = props;
    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);
    const document = useSelector(state => state.document);


    const onSelect = (e) => {
        const value = e.currentTarget.value;
        const prop = {
            name: parsedProp.name,
            value,
            resolution,
            id: document.activeComponent.id
        }
        if (value === 'default') {
            prop.value = '';
        }
        dispatch(setProp(prop));
    }


    return (
        <>
            <SelectBody 
                value={parsedProp && parsedProp.value || options[0].name}
                onChange={onSelect}
                disabled={isDisabled}
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
