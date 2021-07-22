import React from 'react'
import { InputTextBody } from './InputTextStyled'


export default function InputText(props) {

    const {parsedProp, isDisabled} = props;

    return (
        <>
            <InputTextBody onChange={() => {}} type="text" value={parsedProp && parsedProp.value || ''} disabled={isDisabled} />
        </>
    )
}
