import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { updateComponentIds } from '../../../core/functions/admin/components';
import { addComponent, addComponentToActive, deleteComponent, setComponentToBuffer, unsetActiveComponent } from '../../../store/actions/document';



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

            // CTRL + C
            if (ctrl && key === keyC && activeComponent) {
                dispatch(setComponentToBuffer(activeComponent));
            }
            // CTRL + X
            if (ctrl && key === keyX && activeComponent) {
                dispatch(setComponentToBuffer(activeComponent));
                dispatch(unsetActiveComponent());
                dispatch(deleteComponent(activeComponent.id));
            }
            // CTRL + Z
            if (ctrl && key === keyZ && activeComponent) {
                console.log('CTRL + Z pressed');
            }
            // CTRL + V
            if (ctrl && key === keyV && activeComponent && bufferedComponent) {
                const componentCopy = updateComponentIds({...bufferedComponent});
                dispatch(addComponent(activeComponent.id, componentCopy));
                activeComponent && dispatch(addComponentToActive(componentCopy));
            }
        }

        document.addEventListener('keydown', onDocumentKeydown);

        return () => {
            document.removeEventListener('keydown', onDocumentKeydown);
        }
    });

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset,
          width: box.width,
          height: box.height
        };
      }

    const [coords, setCoords] = useState();

    // useEffect(() => {
    //     console.log('effect');
    //     if (document && activeComponent && activeComponent.id) {
    //         const el = document.getElementById(activeComponent.id);
    //         const docEl = document.getElementById('doc001');
    //         const elCoords = getCoords(el);
    //         const docElCoords = getCoords(docEl);
    //         const coords = {
    //             ...elCoords,
    //             left: elCoords.left - docElCoords.left,
    //             top: elCoords.top - docElCoords.top
    //         }
    //         setCoords(coords);
    //     }
    //     if (!activeComponent) {
    //         setCoords(null);
    //     }
    // }, [activeComponent]);


    return (
        <div id='doc001' style={{position: 'relative'}}>
            {coords &&
            <div style={{width: `${coords.width}px`, height: `${coords.height}px`, position: 'absolute', top: `${coords.top}px`, left: `${coords.left}px`, pointerEvents: 'none', zIndex: '2', outline: '2px solid #42a5f5',
            outlineOffset: '1px'}}></div>}
            {props.children}
        </div>
    )
}
