import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { updateComponentIds } from '../../../core/functions/admin/components';
import { generateNewId } from '../../../core/functions/components';
import { addComponent, setComponentToBuffer } from '../../../store/actions/document';

export default function Document(props) {

    const activeComponent = useSelector(state => state.document.activeComponent);
    const bufferedComponent = useSelector(state => state.document.buffer);
    const dispatch = useDispatch();

    useEffect(() => {
        const onDocumentKeydown = (e) => {
            const key = e.keyCode;
            const ctrl = e.ctrlKey;
            const keyC = 67;
            const keyV = 86;
            const keyZ = 90;
            const keyX = 88;

            if (ctrl && key === keyC && activeComponent) {
                console.log('CTRL + C pressed');
                dispatch(setComponentToBuffer(activeComponent));
            }

            if (ctrl && key === keyX && activeComponent) {
                console.log('CTRL + X pressed');
            }

            if (ctrl && key === keyZ && activeComponent) {
                console.log('CTRL + Z pressed');
            }

            if (ctrl && key === keyV && activeComponent && bufferedComponent) {
                console.log('CTRL + V pressed');
                const componentCopy = updateComponentIds({...bufferedComponent});
                dispatch(addComponent(activeComponent.id, componentCopy));
            }
        }

        document.addEventListener('keydown', onDocumentKeydown);

        return () => {
            document.removeEventListener('keydown', onDocumentKeydown);
        }
    })





    return (
        <>
            {props.children}
        </>
    )
}
