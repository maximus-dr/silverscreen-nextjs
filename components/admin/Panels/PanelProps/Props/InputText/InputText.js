import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearBuffer, setProp } from '../../../../../../store/actions/document';
import { InputTextBody } from './InputTextStyled'


export default function InputText(props) {

    const {parsedProp, isDisabled} = props;
    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);
    const buffer = useSelector(state => state.document.buffer);
    const document = useSelector(state => state.document);


    const onInputFocus = () => {
        if (buffer) dispatch(clearBuffer());
    }

    const onInputChange = (e) => {
        dispatch(setProp({
            name: parsedProp.name,
            value: e.target.value,
            resolution,
            id: document.activeComponent.id
        }));
    }

    return (
        <>
            <InputTextBody
                type="text"
                value={parsedProp && parsedProp.value || ''}
                disabled={isDisabled}
                onFocus={onInputFocus}
                onChange={onInputChange}
            />
        </>
    )
}
