import React from 'react'
import { InputTextBody } from './InputTextStyled'


export default function InputText(props) {

    const {parsedProp} = props;

    return (
        <>
            <InputTextBody onChange={() => {}} type="text" value={parsedProp && parsedProp.value || ''} />
        </>
    )
}
